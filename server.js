
    // const insertData = 'INSERT INTO booksdata (title, genre, author, pages, price, featured, bestseller) VALUES ?';

    // const values = [
    //     ['good guys', 'crime', 'steven brust', 132, 12.35, 'yes', 'no'],
    //     ['snuff', 'crime', 'terry pratchett', 121, 10.15, 'yes', 'yes'],
    //     ['the grand dark', 'crime', 'richard kadrey', 159, 16.30, 'no', 'yes'],
    //     ["chip war - the fight for the world's most critical technology", 'economics', 'chris miller', 182, 19.40, 'yes', 'yes'],
    //     ['grand pursuit - the story of the poeple who made modern economics', 'economics', 'sylvia nasar', 212, 11.65, 'no', 'no'],
    //     ['the wealth of nations', 'adam smith', 'economics', 393, 39.35, 'yes', 'yes'],
    //     ['ancient slavery and modern ideology', 'history', 'moses i. finley', 284, 19.55, 'no', 'no'],
    //     ['bloodlands - europe between hitler and stalin', 'history', 'timothy snyder', 162, 12.10, 'yes', 'no'],
    //     ['the fiery trial - abraham lincoln and american slavery', 'history', 'eric foner', 187, 18.35, 'no', 'yes'],
    //     ['the butcher', 'jennifer hillier', 'mystery', 159, 11.85, 'yes', 'yes'],
    //     ['the missing', 'mystery', 'c. l. taylor', 166, 13.25, 'yes', 'yes'],
    //     ['democracy in america', 'politics', 'alexis de tocqueville', 291, 17.85, 'yes', 'no'],
    //     ['long walk to freedom', 'politics', 'nelson mandela', 212, 21.15, 'no', 'yes'],
    //     ['the politics of fear - what right-wing populist discourses mean', 'politics', 'ruth wodak', 222, 33.35, 'yes', 'yes'],
    //     ['do you take this man', 'romance', 'denice williams', 112, 14.95, 'no', 'no'],
    //     ['the bride test', 'romance', 'helen hoang', 189, 15.65, 'no', 'yes'],
    //     ['the intimacy experiment', 'romance', 'rosie danan', 171, 17.95, 'no', 'yes'],
    //     ['the big bang of numbers - how to build the universe using only  math', 'science', 'manil suri', 250, 18.75, 'no', 'no'],
    //     ['the data detective - ten easy rules to make sense of statistics', 'science', 'tim harford', 317, 20.65, 'yes', 'yes'],
    //     ['atlas of ai', 'technology', 'kate crawford', 229, 24.95, 'no', 'yes'],
    //     ['team human', 'technology', 'douglas rushkoff', 216, 10.95, 'yes', 'no'],
    //     ['the singularity is near', 'technology', 'ray kurzweil', 197, 16.15, 'yes', 'yes']
    // ];

    // connection.query(insertData, [values], (error) => {
    //     if(error)
    //         console.log(error)
    //     else
    //         console.log('data inserted');
    // });

const express = require('express');
//const paypal = require('./config/payPalConfig');
//const path = require('path')
const cors = require('cors');
//const bodyParser = require('body-parser');
const pageControllers = require('./controllers/pageControllers'); 
const bookControllers = require('./controllers/bookControllers');
const cartControllers = require('./controllers/cartControllers');
const paymentControllers = require('./controllers/paymentControllers');
//const cartItems = require('./public/js/app');

const app = express();

app.use(cors());

app.set('view engine', 'ejs');

//app.set('views', path.join(__dirname, 'views'));

//app.use(bodyParser.urlencoded());

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.use(express.json());

app.get('/', pageControllers.getHomePage);

app.get('/books', pageControllers.getBooksPage);

app.get('/bestsellers', pageControllers.getBestSellersPage);

app.get('/login', pageControllers.getLoginPage);

app.get('/register', pageControllers.getRegisterPage);

app.get('/api/featured', bookControllers.getFeaturedBooks);

app.get('/api/books', bookControllers.getAllBooks);

app.get('/books/:id', bookControllers.getBook);

app.get('/api/bestsellers', bookControllers.getBestSellers);

app.get('/bookdetails', bookControllers.getBookDetails);

app.get('/emptycart', cartControllers.displayEmptyCartPage);

app.post('/add-to-cart', cartControllers.addToCart);

app.get('/cart', cartControllers.displayCartItemsPage);

app.post('/post-to-checkout', pageControllers.postToCheckOut);

app.get('/checkout', pageControllers.getCheckOutPage);

app.get('/api/paypal/client-id', paymentControllers.getClientId);

app.get('/success', pageControllers.getSuccessPage)
  

const PORT = process.env.PORT || 5500;

app.listen(PORT, (console.log(`Listening on port ${PORT}`)));

// console.log(paypalClientId);
// console.log(paypalClientSecret);