require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
});

module.exports = pool;

// pool.getConnection((error, connection) => {
//     if(error)
//         console.log(error);
//     else 
//         console.log('connection successful');
// });