require('dotenv').config();
const mysql = require('mysql2');

console.log("Host:", process.env.MYSQLHOST);
console.log("User:", process.env.MYSQLUSER);

const pool = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
});

module.exports = pool;

// pool.getConnection((error, connection) => {
//     if(error)
//         console.log(error);
//     else 
//         console.log('connection successful');
// });