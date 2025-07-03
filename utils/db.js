const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: process.env.NAME_HOST,
    user: process.env.NAME_USER,
    password: process.env.NAME_PASSWORD,
    database: process.env.NAME_DATABASE,
    port: process.env.NAME_PORT,
});

module.exports = pool;
