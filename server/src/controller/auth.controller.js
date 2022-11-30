const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const commonHelper = require("../helper/common");
const authHelper = require("../helper/auth");
const { findEmail, create } = require("../model/auth.model");

const authController = {
  register: async (req, res, next) => {
    try {
      const { firstname, lastname, email, phoneNumber, password } = req.body;
      const { rowCount } = await findEmail(email);
      if (rowCount) {
        return next(createError(403, "Email is already used"));
      }
      const passwordHash = bcrypt.hashSync(password);
      const data = {
        id: uuidv4(),
        firstname,
        lastname,
        email,
        phoneNumber,
        passwordHash,
      };
      //   console.log(data);
      create(data)
        .then((result) => {
          commonHelper.response(res, result.rows, 201, "Register success");
        })
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const {
        rows: [user],
      } = await findEmail(email);
      if (!user) {
        return commonHelper.response(res, null, 403, "Email is invalid");
      }
      const isValidPassword = bcrypt.compareSync(password, user.password);
      if (!isValidPassword) {
        return commonHelper.response(res, null, 403, "Password is invalid");
      }
      delete user.password;
      const payload = {
        id: user.id,
      };
      user.token = authHelper.generateToken(payload);
      commonHelper.response(res, user, 201, "login is successful");
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = authController;
