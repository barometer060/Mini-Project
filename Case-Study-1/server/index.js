//Imports
const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./routes/products");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

//Middleware
app.use(morgan("tiny"));
app.use(helmet());
app.use(express.json());
app.use(cors());

//Routing;
app.use("/api/products", products);

mongoose
  .connect("mongodb://localhost/caseStudy1")
  .then(() => console.log("Connected to the database"))
  .catch(err => console.error("Error connecting to the database...", err));

//Server Start
app.listen(8080, err => {
  try {
    console.log("Server running on PORT : 8080");
  } catch (err) {
    throw err;
  }
});
