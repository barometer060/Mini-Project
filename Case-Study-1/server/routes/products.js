const express = require("express");
const router = express.Router();
const { Product, validate } = require("../models/product");
const _ = require("lodash");

router.get("/", async (req, res) => {
  const products = await Product.find().sort("_id");
  res.send(products);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const product = new Product({
    _id: req.body._id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });
  await product.save();

  res.send(_.pick(product, ["_id", "name", "description", "price"]));
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    },
    { new: true }
  );

  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(_.pick(product, ["_id", "name", "description", "price"]));
});

router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);

  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(_.pick(product, ["_id", "name", "description", "price"]));
});

module.exports = router;
