import Joi from 'joi';

export const registerSchema = Joi.object({
  FullName: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.base': 'Full name should be a type of text',
      'string.empty': 'Full name cannot be empty',
      'string.min': 'Full name should have a minimum length of {#limit}',
      'string.max': 'Full name should have a maximum length of {#limit}',
      'any.required': 'Full name is required'
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } }) // allow: false for TLDs like .com, .net
    .required()
    .messages({
      'string.base': 'Email should be a type of text',
      'string.empty': 'Email cannot be empty',
      'string.email': 'Email must be a valid email address',
      'any.required': 'Email is required'
    }),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')) // At least one lowercase, one uppercase, one number, one special character
    .required()
    .messages({
      'string.base': 'Password should be a type of text',
      'string.empty': 'Password cannot be empty',
      'string.min': 'Password should have a minimum length of {#limit}',
      'string.max': 'Password should have a maximum length of {#limit}',
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      'any.required': 'Password is required'
    }),
  phoneNo: Joi.string()
    .pattern(new RegExp('^\\+?[1-9]\\d{1,14}$')) // E.164 format (e.g., +1234567890)
    .optional()
    .messages({
      'string.base': 'Phone number should be a type of text',
      'string.pattern.base': 'Phone number must be a valid international phone number (e.g., +1234567890)'
    }),
  address: Joi.string()
    .min(5)
    .max(200)
    .optional()
    .messages({
      'string.base': 'Address should be a type of text',
      'string.min': 'Address should have a minimum length of {#limit}',
      'string.max': 'Address should have a maximum length of {#limit}'
    }),
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.base': 'Email should be a type of text',
      'string.empty': 'Email cannot be empty',
      'string.email': 'Email must be a valid email address',
      'any.required': 'Email is required'
    }),
  password: Joi.string()
    .required()
    .messages({
      'string.base': 'Password should be a type of text',
      'string.empty': 'Password cannot be empty',
      'any.required': 'Password is required'
    }),
});