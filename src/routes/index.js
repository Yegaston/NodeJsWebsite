const express = require('express')
const Router = express.Router();


Router.get('/', (req, res) => {
    res.render('index.html', {title: 'La renga'})
})

Router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact'})
})

module.exports = Router;