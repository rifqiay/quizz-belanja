const express = require("express");
const { register, login } = require("../controller/auth.controller");
const router = express.Router();

router.post("/register", register).post("/login", login);

module.exports = router;
