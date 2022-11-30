const Pool = require("../config/db");

const create = (data) => {
  const {
    id,
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
    photo,
    stock,
  } = data;
  return Pool.query(
    `INSERT INTO products (id,nama,toko,price,origin,species,roast_level,tasted,processing,deskripsi,informasi,photo,stock) VALUES('${id}','${nama}','${toko}',${price},'${origin}','${species}','${roast_level}','${tasted}','${processing}','${deskripsi}','${informasi}','${photo}',${stock})`
  );
};

const getAll = ({
  search,
  origin,
  toko,
  species,
  roast_level,
  tasted,
  processing,
  sort,
  sortby,
}) => {
  return Pool.query(
    `select * from products where nama ilike '%${search}%' and origin ilike '%${origin}%' and toko ilike '%${toko}%' and species ilike '%${species}%' and roast_level ilike '%${roast_level}%' and tasted ilike '%${tasted}%' and processing ilike '%${processing}%' order by ${sortby} ${sort}`
  );
};

const getById = (id) => {
  return Pool.query(`SELECT * FROM products WHERE id='${id}'`);
};

module.exports = {
  create,
  getAll,
  getById,
};
