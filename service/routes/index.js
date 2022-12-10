const express = require('express');
const router = express.Router();
const repo = require('../repo/repo.js');
const bip39 = require('bip39')

/* GET home page. */
router.get('/', function (req, res, next) {
  bip39.mnemonicToSeed("charlie").then(charlieSeed => {
    bip39.mnemonicToSeed("donald").then(donaldSeed =>
      repo.postData(charlieSeed.slice(0, 32), donaldSeed.slice(0, 32)));
  }
  );
  res.render('index', { title: 'Express' });
});

module.exports = router;
