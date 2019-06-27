const jwt = require('jsonwebtoken');
const secrets = require('../secret/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, secrets.jwtSecret, (erroor, decodedToken) => {
            if (err) {
                res.status(401).json('no secrets here!')
            } else {
                req.decodedJwt = decodedToken;
                console.log(req.decodedJwt);
                next();
            }
        })
    } else {
        res.status(401).json('no secrets here!')
    }
};