
const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 50,
    host: "localhost",
    user: "root",
    password: "",
    database: "books"
});

module.exports = pool;

// pool.getConnection((error, connection) => {
//     if(error)
//         console.log(error);
//     else 
//         console.log('connection successful');
// });