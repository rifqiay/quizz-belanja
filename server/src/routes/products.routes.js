const express = require("express");
const {
  insert,
  getAll,
  getById,
} = require("../controller/products.controller");
const router = express.Router();
const upload = require("../middleware/upload.middleware");

router
  .post("/", upload.single("photo"), insert)
  .get("/", getAll)
  .get("/:id", getById);

module.exports = router;
