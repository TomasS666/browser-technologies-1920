const express = require('express');
const router = express.Router();
const path = require('path')


router.get('/result', (req, res) => {
    
    console.log(req.query)


        res.render('result.ejs', {
            query: req.query,
            url: req.protocol + '://' + req.get('host') + req.originalUrl
        })

})
   


module.exports = router;