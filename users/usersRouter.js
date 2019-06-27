const router = require('express').Router();

const checkRole = require('../auth/checkMiddleWare');

router.get('/', checkRole('student'), async (req, res) => {
    res.send('GET Users')
});
module.exports = router;