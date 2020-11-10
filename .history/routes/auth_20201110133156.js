const express = require('express');
const router = express.Router();

// @route       GET api/auth
// @desc        Get logged in user
// @access      Private
router.get('/', (req, res) => {
  res.send('Get logged in user')
});

// @route       GET api/auth
// @desc        Get logged in user
// @access      Private
router.get('/', (req, res) => {
  res.send('Get logged in user')
});

module.exports = router;
