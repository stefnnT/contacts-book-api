const express = require('express');
const router = express.Router();

// @route       Get api/contacts
// @desc        Get all users a user
// @access      Public
router.post('/', (req, res) => {
  res.send('Register a user')
});

module.exports = router;
