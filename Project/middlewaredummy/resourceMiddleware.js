const updateResource = require('./updateResource');
const model = require('./resourceModel');

const resourceMiddleware = (req, res, next) => {
  if ((req.method === 'POST' || req.method === 'PUT') && req.url !== '/login' && req.url !== '/register') {
      updateResource(model);
      res.send(model.resources);
  } else {
    res.send({ message: 'ylo' })
    next();
    return;
  }
}

module.exports = resourceMiddleware;