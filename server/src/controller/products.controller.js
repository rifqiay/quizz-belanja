const createError = require("http-errors");
const { v4: uuidv4 } = require("uuid");
const { create, getAll, getById } = require("../model/products.model");
const commonHelper = require("../helper/common");

const productController = {
  insert: (req, res, next) => {
    const photo = req.file.filename;
    const {
      nama,
      toko,
      price,
      origin,
      species,
      roast_level,
      tasted,
      processing,
      deskripsi,
      informasi,
      stock,
    } = req.body;
    const data = {
      id: uuidv4(),
      nama,
      toko,
      price,
      origin,
      species,
      roast_level,
      tasted,
      processing,
      deskripsi,
      informasi,
      photo: `${process.env.API_URL}/img/${photo}`,
      stock,
    };
    create(data)
      .then((result) => {
        commonHelper.response(res, result.rows, 201, "Product created");
      })
      .catch((err) => res.send(err));
  },
  getAll: async (req, res, next) => {
    try {
      const search = req.query.search || "";
      const origin = req.query.origin || "";
      const toko = req.query.toko || "";
      const species = req.query.species || "";
      const roast_level = req.query.roast_level || "";
      const tasted = req.query.tasted || "";
      const processing = req.query.processing || "";
      const sortby = req.query.sortby || "nama";
      const sort = req.query.sort || "ASC";
      const result = await getAll({
        search,
        origin,
        toko,
        species,
        roast_level,
        tasted,
        processing,
        sort,
        sortby,
      });
      commonHelper.response(res, result.rows, 200, "get all product success");
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await getById(id);
      commonHelper.response(res, result.rows, 200, "get product by id success");
    } catch (error) {
      console.log(id);
    }
  },
};

module.exports = productController;
