require('dotenv').config({path:__dirname+'../../.env'})

const express = require('express')
const app = express()
const port = process.env.PORT || 7070
const axios = require('axios')

const designShirt = require('./routes/design-shirt.js')
const home = require('./routes/home.js')
const result = require('./routes/result.js')
// const overview = require('./routes/overview.js')

// const bodyParser = require('body-parser')
const path = require("path")
const save = require("./routes/save.js")

// const partials = require('express-partials');
// app.get('/', (req, res) => res.send('Hello World!'))
app
    
    // .use(bodyParser.urlencoded({ extended: true }))
    // .use(partials())
    .set('view-engine', 'ejs')
    .set('views', path.join(__dirname,'views'))
    .use(express.json())
    // .use(express.static(path.join(__dirname, '../static')));
    // .use('/', designShirt)
    // .use('/', home)
    // .use('/', save)
    // .use('/', result)
    // .use('/', detail)
    // .use('/', search)
    async function getUserPage(handle){
        const instagramJson = await axios.get(`https://www.instagram.com/${handle}/?__a=1`);
        // const instagramJson = await (await fetch(`https://www.instagram.com/${handle}/?__a=1`)).json();
        // const instagramJson = await fetch(`https://www.instagram.com/${handle}/?__a=1`);
        // const {
        //      graphql:{
        //          user:{
        //             edge_owner_to_timeline_media: {
        //                 edges
        //             }
        //          }
        //      }
        // } = await instagramJson.data;
        console.log('handle from server ', handle )
        // console.log(instagramJson.data)
    
        // const data = await instagramJson.json()
        console.log('data', instagramJson.data)
        // console.log(instagramJson.json())
    
        return instagramJson.data
        // return getShortCodes(instagramJson.graphql.user.edge_owner_to_timeline_media.edges)
    }
    
    app.get('/', async (req, res) => {
    
    //    const data = await getUserPage('eminem')
       res.send('nope')
    })
    
    .listen(port, () => console.log(`B ${port}!`))