const mysql = require("mysql2/promise")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0203",
    database: "sistema",
    port: 3306
})

module.exports = db