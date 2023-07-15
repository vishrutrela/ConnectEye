const express= require('express');

const router= express.Router();
const homeController= require('../controllers/home_controller')
// const userrouter= require('./users')
console.log('routes worked')

router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'))
//for any other routes access from here

module.exports= router;


   
