const routes = require('express').Router();
const post = require('./post');
const post_controller = require('../controllers/post');
const register = require('./register');
//const register_controller = require('../controllers/register');
const login = require('./login');
const search = require('./search');

// Route for Post
routes.use('/post', post);

// Route for Register
routes.use('/register',register);

// Route for Login
routes.use('/login',login);

// Route for Search
routes.use('/search',search);

// Render Home
routes.get('/', function(req, res){
    // check for user in session, if exist logged_in = true, else logged_in = false
    // res.render('index.hbs');
    res.render('index.hbs', {
        logged_in: false
    });
});

module.exports = routes;