const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users_controller');

router.get('/profile/:id',passport.checkAuthentication, userController.profile);
router.post('/update/:id',passport.checkAuthentication, userController.update);
router.get('/sign-up', userController.SignUp);
router.get('/sign-in', userController.SignIn);
router.post('/create', userController.create);
router.post('/createSession', passport.authenticate('local', { failureRedirect: '/users/sign-in',failureMessage:true }), userController.createSession);

router.get('/sign-out',userController.destroySession);


module.exports = router;

