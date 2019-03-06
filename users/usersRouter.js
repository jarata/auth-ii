const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send('GET Users')
});
module.exports = router;