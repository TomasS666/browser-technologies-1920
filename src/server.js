// require('dotenv').config({path:__dirname+'../../.env'})



const express = require('express')
const app = express()
const port = 7070

// const overview = require('./routes/overview.js')

// const bodyParser = require('body-parser')
const path = require("path")

// const partials = require('express-partials');
app.get('/', (req, res) => res.send('Hello World!'))
app
    
    // .use(bodyParser.urlencoded({ extended: true }))
    // .use(partials())
    .set('view-engine', 'ejs')
    .set('views', path.join(__dirname,'views'))

    
    .use(express.static(path.join(__dirname, '../build')))
    // .use('/', offline)
    // .use('/', overview)
    // .use('/', detail)
    // .use('/', search)

    
    .listen(port, () => console.log(`BT ${port}!`))