import Joi from 'joi';

export const createCartSchema = Joi.object({
  userId: Joi.string().required(),
  products: Joi.array().items(Joi.object({
    productId: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required(),
  })).required(),
});

export const updateCartSchema = Joi.object({
  userId: Joi.string().optional(),
  products: Joi.array().items(Joi.object({
    productId: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required(),
  })).optional(),
}).min(1); // At least one field is required for update
