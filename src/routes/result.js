const express = require('express');
const router = express.Router();
const path = require('path')

var Jimp = require("jimp");

function createImage(){
 

var fileName = '../static/img/shirt.jpg';
var imageCaption = "I'm a nerd!";
var loadedImage;

Jimp.read(fileName)
    .then(function (image) {
        loadedImage = image;
        return Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    })
    .then(function (font) {
        loadedImage.print(font, 300, 300, imageCaption)
                   .write(fileName);
                   console.log('image created')
    })
    .catch(function (err) {
        console.error(err);
    });
}


router.get('/result', (req, res) => {
    
    console.log(req.query)

    createImage()


        res.render('result.ejs', {
            query: req.query,
            url: req.protocol + '://' + req.get('host') + req.originalUrl
        })

})
   


module.exports = router;