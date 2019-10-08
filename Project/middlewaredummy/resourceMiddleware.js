const updateResource = require('./updateResource');
const model = require('./resourceModel');

const resourceMiddleware = (req,res,next) => {
  if (req.url === '/login' || req.url === '/register') {
    res.send({message : 'nope'});
  }else if (req.method === 'POST' || req.method === 'PUT') {
    updateResource(model);
    res.send(model.resources);
  }
}

module.exports = resourceMiddleware;