const express = require('express'); // dependencies from npm (package.json)

// Initialize our router
const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/grocery');
});

module.exports = router;
