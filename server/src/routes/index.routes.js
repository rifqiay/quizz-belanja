const express = require("express");
const router = express.Router();
const authRouter = require("./auth.routes");
const productRouter = require("./products.routes");

router.use("/auth", authRouter).use("/products", productRouter);

module.exports = router;
