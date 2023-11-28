// handling navigation menu

//const { book } = require("../../models/bookModel");

let headerContentContainer = document.getElementById("header_content_container");
let nav = document.getElementById("navigation");
let logo = document.getElementById("website_logo");
let hamburgerMenu = document.getElementById("hamburger");
let closeMenu = document.getElementById("close_mobile_menu");

hamburgerMenu.addEventListener("click", () => {
    headerContentContainer.classList.add("h-[100vh]");
    nav.classList.replace("hidden", "block");
    nav.classList.add("self-center");
    logo.classList.add("self-start");
    hamburgerMenu.classList.add("hidden");
    closeMenu.classList.replace("hidden", "block");
    closeMenu.classList.add("self-start");
})

closeMenu.addEventListener("click", () => {
    headerContentContainer.classList.remove("h-[100vh]")
    closeMenu.classList.replace("block", "hidden");
    hamburgerMenu.classList.replace("hidden", "block");
    nav.classList.replace("block", "hidden");
});

// when login button on all pages except "login.html" page is clicked,
//...navigate to "login.html"

// let login_button = document.getElementById("loginButton");
// login_button.addEventListener("click", () => {
//     window.location.href = "/login"
// });

// let form = document.getElementById("form");
// form.addEventListener("submit", () => {
//     form.reset();
// });

const currentPage = window.location.pathname;

if(currentPage === '/') {
    const response = await fetch('/api/featured');
    if(response.ok) {
        const records = await response.json();
        createChildren(records, 'featuredBooksContainer');
    }
}

if(currentPage === '/books') {
    const response = await fetch('/api/books');
    if(response.ok) {
        const records = await response.json();
        createChildren(records, 'allBooksContainer');
    }
}

if(currentPage === '/bestsellers') {
    let response = await fetch('/api/bestsellers');
    if(response.ok) {
        const records = await response.json();
        createChildren(records, 'bestSellersContainer');
    }
}

//let totalItems = 0;
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let quantityInCart = document.getElementById('quantityInCart');
let totalItems = 0;

if(cartItems.length === 0) {
    quantityInCart.textContent = 0;
}

else {
    for(let i = 0; i < cartItems.length; i++) {
        totalItems = totalItems + Number(cartItems[i].quantity);
    }
}
quantityInCart.textContent = totalItems;

//localStorage.setItem('cartItems', JSON.stringify(cartItems));

//console.log(cartItems)

function createChildren (records, id) {
    const booksContainer = document.getElementById(id);
    booksContainer.classList.add('gap-12', 'my-24');

    for(let i = 0; i<records.length; i++) {

        // const booksContainer = document.getElementById(id);
        // booksContainer.classList.add('gap-12', 'my-24');

        const book = document.createElement('div');
        book.setAttribute('id', `${records[i].id}`);
        //book.classList.add('border', 'border-black');
        
        const bookImage = document.createElement('img');
        bookImage.setAttribute('src', `../images/${records[i].genre}/${records[i].title}.jpg`);
        bookImage.classList.add('w-4/5', 'mx-auto', 'h-1/2', 'rounded-lg');

        const bookTitle = document.createElement('p');
        bookTitle.textContent = records[i].title;
        bookTitle.classList.add('capitalize', 'font-bold', 'my-6');

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = records[i].author;
        bookAuthor.classList.add('capitalize', 'text-xs', 'italic', 'my-2');

        const bookPrice = document.createElement('p');
        bookPrice.textContent = "$" + records[i].price;
        bookPrice.classList.add('font-bold', 'capitalize', 'text-2xl', 'my-6');

        // const price_quantity = document.createElement('div');
        // price_quantity.classList.add('flex', 'justify-center', 'items-center', 'my-5');

        // const quantityController = document.createElement('div');
        // quantityController.classList.add('flex', 'justify-betweeen', 'mx-6', 'text-2xl');


        // const bookQuantity = document.createElement('p');
        // let quantity = 0;
        // bookQuantity.textContent = quantity;
        // bookQuantity.classList.add('mx-3');

        // const increment = document.createElement('i');
        // increment.className = 'bi bi-plus-lg';
        // increment.classList.add('text-green-700', 'cursor-pointer');

        // increment.addEventListener('click', () => {
        //     quantity = increaseQuantity(quantity);
        //     bookQuantity.textContent = quantity;
        //     totalQuantity = totalQuantity + 1;
        //     //updateTotalQuantity(quantity);
        //     //console.log(totalQuantity);
        //     let quantityInCart =  document.getElementById('quantityInCart');
        //     quantityInCart.textContent = totalQuantity;
        // });

        // decrement.addEventListener('click', () => {
        //     if(quantity === 0)
        //         return;

        //     else {
        //         quantity = decreaseQuantity(quantity);
        //         bookQuantity.textContent = quantity;
        //         totalQuantity = totalQuantity - 1;
        //         const quantityInCart =  document.getElementById('quantityInCart');
        //         quantityInCart.textContent = totalQuantity;
        //         //console.log(totalQuantity);
        //     }
        //     //updateTotalQuantity(quantity);
        // });

        // // const button = document.createElement('button');
        // // button.textContent = 'BUY';
        // // button.classList.add('bg-black', 'text-white', 'rounded-full', 'px-8', 'py-2');
        // // button.addEventListener('click', () => {
        // //     getBookDetailsPage(records[i].id);
        // // });

        book.setAttribute('data-quantity', 1);
        bookImage.setAttribute('data-image', bookImage.getAttribute('src'));
        bookTitle.setAttribute('data-title', bookTitle.textContent);
        bookAuthor.setAttribute('data-author', bookAuthor.textContent);
        bookPrice.setAttribute('data-price', bookPrice.textContent);

        const bookItem = {
            id: book.getAttribute('id'),
            image: bookImage.getAttribute('data-image'),
            title: bookTitle.getAttribute('data-title'),
            author: bookAuthor.getAttribute('data-author'),
            price: bookPrice.getAttribute('data-price'),
            quantity: book.getAttribute('data-quantity')
        }
        
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'ADD TO CART';
        addToCartButton.classList.add('bg-black', 'text-white', 'rounded-full', 'px-8', 'py-2');
        addToCartButton.addEventListener('click', () => {
        //const loader = document.createElement('div');
            addToCartButton.disabled = true;
            const spinner = document.createElement('div');
            spinner.classList.add('rounded-full', 'h-7', 'w-7', 'animate-spin', 'border-t-4', 'border-white');
            addToCartButton.textContent = '';
            addToCartButton.append(spinner);
            quantityInCart.textContent = totalItems;

            if(cartItems.find((element) => element.title === bookTitle.textContent)) {
                setTimeout(() => {
                    //pushToCart(bookItem);
                    const viewCartButton = document.createElement('button');
                    viewCartButton.textContent = 'VIEW CART';
                    viewCartButton.classList.add('bg-black', 'text-white', 'rounded-full', 'px-8', 'py-2', );
                    viewCartButton.addEventListener('click', async () => {
                        await fetch('/add-to-cart', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: (localStorage.getItem('cartItems'))
                        })
                        .then((response) => {
                            if(response.ok) {
                                window.location.href = '/cart';
                            }
                            else {
                                console.log('Response not OK');
                            }
                        })
                        .catch((error) => {
                            console.log("There was an error " + error);
                        })
                    });
    
                    book.replaceChild(viewCartButton, addToCartButton);
                    //return;
                    
                }, 2000);

                return;
    
            }

            setTimeout(() => {
                pushToCart(bookItem);

                localStorage.setItem('cartItems', JSON.stringify(cartItems));     
                quantityInCart.textContent = ++totalItems;
     
                const viewCartButton = document.createElement('button');
                viewCartButton.textContent = 'VIEW CART';
                viewCartButton.classList.add('bg-black', 'text-white', 'rounded-full', 'px-8', 'py-2', );
                viewCartButton.addEventListener('click', async () => {
                    await fetch('/add-to-cart', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: (localStorage.getItem('cartItems'))
                    })
                    .then((response) => {
                        if(response.ok) {
                            window.location.href = '/cart';
                        }
                        else {
                            console.log('Response not OK');
                        }
                    })
                    .catch((error) => {
                        console.log("There was an error " + error);
                    })
                });

                book.replaceChild(viewCartButton, addToCartButton);
                    
            }, 2000);

            //createViewCartButton();
        });

        // quantityController.append(decrement, bookQuantity, increment);
        // price_quantity.append(bookPrice, quantityController);
        book.append(bookImage, bookTitle, bookAuthor, bookPrice, addToCartButton);
        booksContainer.appendChild(book);
    }
}

function pushToCart(item) {
    cartItems.push(item);
    //localStorage.setItem('cartItems', JSON.stringify(cartItems));
    //++totalItems;
    //quantityInCart.textContent = totalItems;
    //quantityInCart.textContent = JSON.parse(localStorage.getItem('cartItems')).length
    //console.log(cartItems);
}

const cart = document.getElementById('shoppingCart');
// let isCartOpen = false;

cart.addEventListener('click', async () => {
    
        if (cartItems.length === 0) {
            // const empty = document.createElement('p');
            // empty.textContent = 'No items in cart';
            // cart.append(empty);
            window.location.href = '/emptycart';
        } else {
            //console.log(cartItems.length);
            //localStorage.setItem('c', JSON.stringify(cartItems));
            await fetch('/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: (localStorage.getItem('cartItems'))
            })
            .then((response) => {
                if(response.ok) {
                    window.location.href = '/cart';
                }
                else {
                    console.log('Response not OK');
                }
            })
            .catch((error) => {
                console.log("There was an error " + error);
            })
            // module.exports = {
            //     cartItems
            // }
            // window.location.href = '/cart';
            // const items = createCartItems(cartItems);
           
            //     cart.append(items);
            
            // console.log(items);
        }
        
        //isCartOpen = true;
});

// function createCartItems(cartItems) {
//     //const createdItems = []
//     let cartContainer = document.createElement('div');
//     for (let i = 0; i<cartItems.length; i++) {
//         const item = document.createElement('div');
//         const imageContainer = document.createElement('div');
//         const bookInfoContainer = document.createElement('div');
//         const image = document.createElement('img');
//         const bookTitle = document.createElement('p');
//         const author = document.createElement('p');
//         const price = document.createElement('p');

//         imageContainer.append(image);
//         bookInfoContainer.append(bookTitle, author, price);

//         image.setAttribute('src', cartItems[i].image);
//         bookTitle.textContent = cartItems[i].title;
//         author.textContent = cartItems[i].author;
//         price.textContent = cartItems[i].price;

//         item.append(imageContainer, bookInfoContainer);

//         item.classList.add('flex', 'justify-center', 'my-14');
//         imageContainer.classList.add('mx-4');
//         bookInfoContainer.classList.add('mx-4')
//         image.classList.add('w-36', 'h-36', 'rounded');

//         //createdItems[i] = item;
//         cartContainer.append(item);
//     }

//     //return createdItems;
//     return cartContainer;
// }

// function createViewCartButton(){
//     book.replaceChild(viewCartButton, addToCartButton);
// }

// function increaseQuantity(amount) {
//     return ++amount;
// }

// function decreaseQuantity(amount) {
//     if(amount === 0)
//         return 0;
//     else
//         return --amount;
// }

// function updateTotalQuantity(totalQuantity) {
//     console.log(totalQuantity);
// }

// async function getBookDetailsPage(id) {
//     const response = await fetch(`/books/${id}`);
    
//     if(response.ok) {
//         const record = await response.json();
//         //console.log(record[0])
        
//         // await fetch('/bookdetails', {
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json'
//         //     },
//         //     body: JSON.stringify(record[0])
//         // });
//         const queryString = Object.keys(record[0])
//         //console.log(queryString)
//             .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(record[0][key])}`)
//             .join('&');

//             window.location.href = `/bookdetails?${queryString}`;
//     }
// }
