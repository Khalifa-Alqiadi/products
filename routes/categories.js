const express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET category page. */
router.get('/',  function(req, res, next){
  const {data} = axios.get("https://dummyjson.com/products/category/smartphones")
  .then((response) =>  {
    res.render('index', {title: 'category', category: response.data });
  }).catch((err) =>{
    console.log("err")
  })
});



module.exports = router;
