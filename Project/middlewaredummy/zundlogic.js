const jwt = require('jsonwebtoken');
require('dotenv').config({ path: __dirname + '/../../.env' }); //eslint-disable-line

const tokenAuthorizer = bearerHeader => new Promise((resolve, reject) => {
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        reject(new Error('Token is unvalid.'));
      } else {
        resolve(decoded);
      }
    });
  } else {
    reject(new Error('No token provided.'));
  }
});

const authController = (req, res) => {
  tokenAuthorizer(req.headers.authorization)
    .then(data => res.json(data))
    .catch(error => res.status(401).json({ message: error.message }));
};

router.post('/auth', authController);