import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "asda",
    database: "ument",
  })
  .promise();

const result = await pool.query("SELECT * FROM Users");
console.log(result);
