const express = require("express")
const app = express()

const morgan = require("morgan")

const path = require("path")


// Setup

app.set('port', process.env.PORT || 3000)

// Engine settings
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

// Middlewares
app.use(morgan("dev"))

// Static Files

app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use(require('./routes'))

// Server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
  })