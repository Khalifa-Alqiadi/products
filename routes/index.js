const express = require('express');

var router = express.Router();
const axios = require('axios').default;

/* GET home page. */
router.get('/',  function(req, res, next){
  axios.get("http://dummyjson.com/products")
  .then((response) =>  {
    res.render('index', {title: 'home', products: response.data.products });
  }).catch((err) =>{
    console.log("err")
  })
});
router.get('/index/:id', async function(req, res, next){
  const pid = req.params.id;
  await axios.get('https://dummyjson.com/products/'+pid)
  .then((response) =>{
  res.render('details', {title: 'details', details: response.data,})
  })  
  .catch((err)=>{
    console.log(err)
  })
});


router.get('/index', async function(req, res, next){
  const select = req.query.q;
  await axios.get('https://dummyjson.com/products/search?q='+select+'&limit=10')
  .then((response) =>{
  res.render('search', {title: 'home', products: response.data.products,})
  })  
  .catch((err)=>{
    console.log(err)
  })
});


module.exports = router;
