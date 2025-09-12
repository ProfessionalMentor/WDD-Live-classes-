import Joi from 'joi';

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().positive().required(),
  category: Joi.string().required(),
  stock: Joi.number().integer().min(0).required(),
  // Add other product fields as necessary
});

export const updateProductSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().positive().optional(),
  category: Joi.string().optional(),
  stock: Joi.number().integer().min(0).optional(),
  // Add other product fields as necessary
}).min(1); // At least one field is required for update
