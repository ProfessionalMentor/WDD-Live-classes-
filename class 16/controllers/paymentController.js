import { stripe } from '../config/stripeConfig.js';
import { Payment } from '../models/paymentModel.js';
import { Order } from '../models/orderModel.js';

export const createPaymentIntent = async (req, res) => {
    try {
        const { orderId } = req.body;
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
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

        res.status(201).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const stripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object;
        const payment = await Payment.findOne({ stripePaymentId: paymentIntent.id });

        if (payment) {
            payment.status = 'succeeded';
            await payment.save();

            const order = await Order.findById(payment.orderId);
            if (order) {
                order.status = 'paid';
                await order.save();
            }
        }
    } else if (event.type === 'payment_intent.payment_failed') {
        const paymentIntent = event.data.object;
        const payment = await Payment.findOne({ stripePaymentId: paymentIntent.id });

        if (payment) {
            payment.status = 'failed';
            await payment.save();
        }
    }

    res.json({ received: true });
};