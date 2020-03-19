const express = require('express');
const router = express.Router();
const path = require('path')

var url = require('url');



router.get('/save', (req, res) => {

    var url_parts = url.parse(req.url, true);
    
// var query = url_parts.query;
    
    res.render('components/save.ejs', {
        query: req.query,
        step: req.params.step ? req.params.step : "1",
        url: url_parts.search,
        baseurl: req.protocol + '://' + req.get('host')
    })
})

module.exports = router;