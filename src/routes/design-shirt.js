const express = require('express');
const router = express.Router();
const path = require('path')


router.get('/design-shirt', (req, res) => {
    
    console.log(req.query)

    console.log(req.protocol + '://' + req.get('host') + req.originalUrl)
        res.render('design-shirt.ejs', {
            title: 'Design your shirt',
            query: req.query,
            url: req.protocol + '://' + req.get('host') + req.originalUrl
        })

})
   

// router.get('/design-shirt/step-:step', (req, res) => {
    
//     res.render('design-shirt.ejs', {
//         query: req.query,
//         step: req.params.step ? req.params.step : "1",
//         url: eq.protocol + '://' + req.get('host') + req.originalUrl
//     })
// })

module.exports = router;