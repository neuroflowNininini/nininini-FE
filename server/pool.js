// mysql statement 의 비동기적 작성을 위한 promise pool.

require('dotenv').config();

const mysql = require("mysql2");
const pool = mysql.createPool(
  {
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PW,
    database: process.env.DB
  }
).promise();

module.exports = pool;
