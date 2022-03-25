var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const {googlelogin} = require('../controllers/auth')

router.post('/api/googlelogin', googlelogin)

module.exports = router;