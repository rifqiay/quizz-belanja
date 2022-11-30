const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
// pool.connect(function (err) {
//   if (err) throw err;
//   console.log("Database Connected!");
// });

module.exports = pool;
