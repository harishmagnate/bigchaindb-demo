var express = require('express');
var router = express.Router();
var repo = require('../repo/repo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  repo.postData();
  res.render('index', { title: 'Express' });
});

module.exports = router;
