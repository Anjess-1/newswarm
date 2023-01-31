const mysql = require("mysql");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "newzwarm"
})

module.exports = connection;