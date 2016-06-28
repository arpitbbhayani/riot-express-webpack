var express = require('express')
  , router = express.Router();

router.use('/status', require('./status'))

router.get('/', function(req, res) {
  res.render('home');
})

module.exports = router
