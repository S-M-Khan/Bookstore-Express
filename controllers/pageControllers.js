//const { response } = require("express");

// const cartControllers = require('./cartControllers');
let cartItems = [];

const getHomePage = (request, response) => {
    response.render('index');
};

const getBooksPage = (request, response) => {
    response.render('books');
};

const getBestSellersPage = (request, response) => {
    response.render('bestsellers');
};

const getLoginPage = (request, response) => {
    response.render('login');
};

const getRegisterPage = (request, response) => {
    response.render('register');
};

const postToCheckOut = (request, response) => {
    cartItems = request.body;
    response.send(response.body)
}

const getCheckOutPage = (request, response) => {
    response.render('checkout', {cartItems});
}

const getSuccessPage = (request, response) => {
    response.render('success');
}

module.exports = {
    getHomePage,
    getBooksPage,
    getBestSellersPage,
    getLoginPage,
    getRegisterPage,
    postToCheckOut,
    getCheckOutPage,
    getSuccessPage
};
