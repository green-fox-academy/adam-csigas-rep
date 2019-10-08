const updateResource = require('./updateResource');
const model = require('./resourceModel');

const resourceMiddleware = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    if (req.url !== '/login' || req.url !== '/register') {
      updateResource(model);
      res.send(model.resources);
      next();
      return;
    }
  }else {
    next();
    return;
  }
}

module.exports = resourceMiddleware;