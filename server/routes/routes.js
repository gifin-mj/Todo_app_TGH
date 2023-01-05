var express = require('express');
var router = express.Router();
var controllers=require('../controllers/controllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.get('/home', function(req, res, next) {
  res.render('home');
});

router.post('/signup',controllers.signup)
router.post('/login',controllers.login)

module.exports = router;
