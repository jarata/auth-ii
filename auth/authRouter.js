const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    res.send('POST Register')
});

router.post('/login', async (req, res) => {
    res.send('POST Login')
});

module.exports = router;