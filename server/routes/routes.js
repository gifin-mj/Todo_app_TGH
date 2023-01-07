var express = require('express');
var router = express.Router();
var controllers=require('../controllers/controllers')
var renders=require('../renders/render')
/* GET home page. */

router.get('/',renders.login);
router.get('/signup', renders.signup);
router.get('/home',renders.home)
router.get('/report',renders.report)

router.get('/api/alltasks',controllers.alltasks);
router.get('/api/report',controllers.report)


router.get('/completetask/:id',controllers.completetask)
router.get('/canceltask/:id',controllers.canceltask)
router.get('/deletetask/:id',controllers.deletetask)


router.post('/signup',controllers.signup)
router.post('/login',controllers.login)
router.post('/api/task',controllers.addtask)

module.exports = router;
