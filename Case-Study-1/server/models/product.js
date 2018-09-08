const mongoose = require("mongoose");
const Joi = require("joi");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    _id: {
      type: Number,
      min: 1,
      max: 9999
    },
    name: {
      type: String,
      min: 2,
      max: 50
    },
    description: {
      type: String
    },
    price: {
      type: Number
    }
  })
);

function validateProduct(product) {
  const schema = {
    _id: Joi.number()
      .min(1)
      .max(9999)
      .required(),
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    description: Joi.string().required(),
    price: Joi.number().required()
  };

  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;
