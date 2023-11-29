require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    MYSQLHOST: process.env.MYSQLHOST,
    MYSQLUSER: process.env.MYSQLUSER,
    MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQLPORT: process.env.MYSQLPORT,
});

module.exports = pool;

// pool.getConnection((error, connection) => {
//     if(error)
//         console.log(error);
//     else 
//         console.log('connection successful');
// });