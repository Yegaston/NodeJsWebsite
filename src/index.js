const express = require("express")
const app = express()

const morgan = require("morgan")

const path = require("path")

// Setup

app.set('port', process.env.PORT || 3000)

// Engine settings
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
// Middlewares

app.use(morgan("dev"))

// Routes

app.get('/', (req, res) => {
    res.render('index')
})

// Server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
  })