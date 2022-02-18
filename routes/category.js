const express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET category page. */
router.get('/',  function(req, res, next){
  axios.get("https://dummyjson.com/products/category/smartphones")
  .then((response) =>  {
    res.render('category', {title: 'category', products: response.data.products });
  }).catch((err) =>{
    console.log("err")
  })
});



module.exports = router;
