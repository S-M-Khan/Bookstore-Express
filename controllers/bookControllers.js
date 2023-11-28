
const bookModel = require('../models/bookModel');

const getFeaturedBooks = async (request, response) => {
    const results = await bookModel.featuredBooks();
    response.send(results);
};

const getAllBooks = async (request, response) => {
    const results = await bookModel.allBooks();
    response.send(results);
};

const getBook = async (request, response) => {
    const id = request.params.id;
    const results = await bookModel.book(id);
    response.send(results);
    
};

const getBookDetails = (request, response) => {
    response.render('bookdetails', {book: request.query});
};

const getBestSellers = async (request, response) => {
    const results = await bookModel.bestSellers();
    response.send(results);
};

module.exports = {
    getFeaturedBooks,
    getAllBooks,
    getBook,
    getBookDetails,
    getBestSellers
}