import Joi from "joi";

// JOI validation schema
export const joiProductSchema = Joi.object({
  sku: Joi.string().required(),
  name: Joi.string().min(2).required(),
  price: Joi.number().required(),
  type: Joi.string().valid("DVD", "Furniture", "Book").required(),
  options: {
    size: Joi.number(),
    height: Joi.number(),
    width: Joi.number(),
    length: Joi.number(),
    weight: Joi.number(),
  },
});
