var express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET home page. */
router.get('/',  function(req, res, next){
  axios.get("http://dummyjson.com/products")
  .then((response) =>  {
    res.render('index', {title: 'home', products: response.data.products });
  }).catch((err) =>{
    console.log("err")
  })
  
});

module.exports = router;
