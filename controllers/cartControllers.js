let cartItems = [];

const displayEmptyCartPage = (request, response) => {
    response.render('emptycart');
}

const addToCart = (request, response) => {
    // cartItems.push(request.body);
    //console.log(cartItems)
    cartItems = request.body;
    response.send(response.body)
    //console.log(request.body);
}

// const addToCart = (request, response) => {
//     // cartItems.push(request.body);
//     //console.log(cartItems)
//     if(request.body.length === 0) {
//         cartItems = request.body;
//         response.json('empty');
//     }

//     else {
//         cartItems = request.body;
//         response.send(response.body);
//     }
//     //console.log(request.body);
// }

const displayCartItemsPage = (request, response) => {
    response.render('cart', {cartItems});
    //console.log(request.body);
}

module.exports = {
    displayEmptyCartPage,
    addToCart,
    displayCartItemsPage
}
