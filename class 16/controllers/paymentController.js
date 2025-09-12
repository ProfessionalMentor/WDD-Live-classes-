import { stripe } from '../config/stripeConfig.js';
import { Payment } from '../models/paymentModel.js';
import { Order } from '../models/orderModel.js';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';
import logger from '../utils/logger.js'; // Import logger

export const createPaymentIntent = catchAsync(async (req, res, next) => {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);

    if (!order) {
        throw new ApiError(404, 'Order not found');
    }

    const paymentIntent = await stripe.paymentIntents.create({
        amount: order.totalPrice * 100, // amount in cents
        currency: 'usd',
        metadata: { orderId: order._id.toString() },
    });

    const payment = new Payment({
        userId: order.userId,
        orderId: order._id,
        stripePaymentId: paymentIntent.id,
        amount: order.totalPrice,
    });

    await payment.save();

    export const createPaymentIntent = catchAsync(async (req, res, next) => {
    const { orderId, idempotencyKey } = req.body;

    if (!idempotencyKey) {
        throw new ApiError(400, 'Idempotency key is required');
    }

    const order = await Order.findById(orderId);

    if (!order) {
        throw new ApiError(404, 'Order not found');
    }

    const paymentIntent = await stripe.paymentIntents.create({
        amount: order.totalPrice * 100, // amount in cents
        currency: 'usd',
        metadata: { orderId: order._id.toString() },
    }, { idempotencyKey }); // Pass idempotencyKey here

    const payment = new Payment({
        userId: order.userId,
        orderId: order._id,
        stripePaymentId: paymentIntent.id,
        amount: order.totalPrice,
    });

    await payment.save();

    res.status(201).json({ clientSecret: paymentIntent.client_secret });
});
});

export const stripeWebhook = catchAsync(async (req, res, next) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        throw new ApiError(400, `Webhook Error: ${err.message}`);
    }

    const paymentIntent = event.data.object;
    const payment = await Payment.findOne({ stripePaymentId: paymentIntent.id });

    switch (event.type) {
        case 'payment_intent.succeeded':
            if (payment) {
                payment.status = 'succeeded';
                await payment.save();

                const order = await Order.findById(payment.orderId);
                if (order) {
                    order.status = 'paid';
                    await order.save();
                }
            }
            break;
        case 'payment_intent.payment_failed':
            if (payment) {
                payment.status = 'failed';
                await payment.save();
            }
            break;
        case 'charge.refunded':
            // Handle refunded charges
            if (payment) {
                payment.status = 'refunded';
                await payment.save();
                // Optionally update order status to 'refunded' or similar
            }
            break;
        case 'payment_intent.canceled':
            // Handle canceled payment intents
            if (payment) {
                payment.status = 'canceled';
                await payment.save();
                // Optionally update order status to 'canceled' or similar
            }
            break;
        default:
            // Unexpected event type
            logger.warn(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
});