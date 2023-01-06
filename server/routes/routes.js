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
router.get('/home', controllers.alltasks);
router.get('/completetask/:id',controllers.completetask)
router.get('/canceltask/:id',controllers.canceltask)
router.get('/deletetask/:id',controllers.deletetask)


router.post('/signup',controllers.signup)
router.post('/login',controllers.login)
router.post('/api/task',controllers.addtask)

module.exports = router;
