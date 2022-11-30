const Pool = require("../config/db");

const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `select * from users where email='${email}'`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

const create = (data) => {
  const { id, firstname, lastname, email, phoneNumber, passwordHash } = data;
  //   console.log(data);
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO users(id,firstname,lastname,email,phoneNumber,password) values('${id}','${firstname}','${lastname}','${email}','${phoneNumber}','${passwordHash}')`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

const createe = (data) => {
  const { id, name, email, passwordHash, role } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO custommer(id, name,email,password,role) VALUES('${id}','${name}','${email}','${passwordHash}','${role}')`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

module.exports = {
  findEmail,
  create,
};
