const db = require('../model');
const jwt_decode = require('jwt-decode');
const { v4: uuidv4 } = require('uuid');

exports.getAllData = async (req, res) => {
  const token = req.headers['x-access-token'];
  const credentials = jwt_decode(token);
  const user = await db.user.findOne({
    _id: credentials.id,
  });

  const data = await db.gateways.find({
    _id: user.gateways,
  });

  res.json(data);
  return;
};

exports.generateGateway = (req, res) => {
  const token = uuidv4();
  var data = new db.gateways({
    name: req.body.name,
    token: token,
    status: 'unused',
    createdAt: new Date().toISOString(),
  });
  if (req.body.name) {
    data.save((err, doc) => {
      !err
        ? res.send({
            generated_id: token,
          })
        : res.send(err);
    });
  } else {
    res.status(401).send({
      message: 'Name required',
    });
  }
  return;
};
