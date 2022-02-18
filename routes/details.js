var express = require('express');
const axios = require('axios')
var router = express.Router();


router.get('/',  function(req, res, next){
    const {data} = axios.get("https://dummyjson.com/products/1")
    .then((response) =>  {
      res.render('details', {title: 'details', details: response.data });
    }).catch((err) =>{
      console.log("err")
    })
  });

  module.exports = router;