var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/index.html');
});

router.post('/signup', function(req, res) {
  if (!req.body.email) {
    res.json({ message: 'Email address required'});
  } else if (!req.body.password) {
    res.json({ message: 'Password required'});
  } else {
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    
    user.save(function(err) {
      if (err) {
        throw err;
      } else {
        res.json({ message: 'User successfully added!'});
      }
    });
  }
});

module.exports = router;
