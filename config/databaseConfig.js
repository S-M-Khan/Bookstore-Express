require('dotenv').config();
const mysql = require('mysql2');

const connectionUrl = process.env.MYSQL_URL || {
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || '',
    database: process.env.MYSQLDATABASE || 'books',
    port: process.env.MYSQLPORT || 3306,
};

const pool = mysql.createPool(connectionUrl);

module.exports = pool;

// pool.getConnection((error, connection) => {
//     if(error)
//         console.log(error);
//     else 
//         console.log('connection successful');
// });