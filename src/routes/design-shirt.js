const express = require('express');
const router = express.Router();
const path = require('path')


router.get('/design-shirt', (req, res) => {
    // let data = []
    console.log(req.query.size)

        res.render('design-shirt.ejs', {query: req.query })

})
   

router.get('/design-shirt/step-:1', (req, res) => {
    res.render('design-shirt.ejs')
})


module.exports = router;