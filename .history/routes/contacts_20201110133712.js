const express = require('express');
const router = express.Router();

// @route       POST api/contact
// @desc        Register a user
// @access      Public
router.post('/', (req, res) => {
  res.send('Register a user')
});

module.exports = router;
