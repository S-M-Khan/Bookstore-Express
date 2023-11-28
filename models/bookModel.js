
const connectionPool = require('../config/databaseConfig');

const featuredBooksQuery = "SELECT * FROM booksdata WHERE featured = 'yes'";
const allBooksQuery = "SELECT * FROM booksdata";
const bestSellersQuery = "SELECT * FROM booksdata WHERE bestseller = 'yes'";


function featuredBooks () {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((error, connection) => {
            if(error) {
            reject(error);
            }
            else {
            resolve();
            }
        });
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            connectionPool.query(featuredBooksQuery, (error, results) => {
                if(error)
                    reject(error);
               else
                    resolve(results);
            });
        });
    });
}

function allBooks () {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((error, connection) => {
            if(error) {
            reject(error);
            }
            else {
            resolve();
            }
        });
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            connectionPool.query(allBooksQuery, (error, results) => {
                if(error)
                    reject(error);
                else
                    resolve(results);
            });
        });
    });
}

function book (id) {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((error, connection) => {
            if(error) {
            reject(error);
            }
            else {
            resolve(id);
            }
        });
    })
    .then((bookId) => {
        return new Promise((resolve, reject) => {
            const bookQuery = `SELECT * FROM booksdata WHERE id = ${bookId}`; 
            connectionPool.query(bookQuery, (error, results) => {
                if(error)
                    reject(error);
                else
                    resolve(results);
            });
        });
    });
}

function bestSellers () {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((error, connection) => {
            if(error) {
            reject(error);
            }
            else {
            resolve();
            }
        });
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            connectionPool.query(bestSellersQuery, (error, results) => {
                if(error)
                    reject(error);
                else
                    resolve(results);
            });
        });
    });
}

module.exports = {
    featuredBooks,
    allBooks,
    book,
    bestSellers
}