const db = require("../model")


exports.getAllData = async (req, res) => {
    const data = await db.dataLogs.find({})
    res.json(data)
    return
}

exports.getById = async (req, res) => {
    const data = await db.dataLogs.findOne({
        _id: req.params._id
    })
    console.log(data)
    res.json(data)
    return
}

exports.insertJSON = async (req, res) => {
    const gateway = await db.gateways.findOne({
        token: req.headers['x-access-token']
    })
    if (!gateway) {
        return res.status(401).send({
            message: "Error",
            errors: "Invalid credentials"
        });
    }
    db.dataLogs.insertMany(req.body, (err, r) => {
        !err ? res.status(200).send({
            message: "Success Input Data"
        }) : res.send(err)
    })
}

exports.insertSingleData = async (req, res, next) => {
    const gateway = await db.gateways.findOne({
        token: req.headers['x-access-token']
    })
    if (!gateway) {
        return res.status(401).send({
            message: "Error",
            errors: "Invalid credentials"
        });
    }
    var data = new db.dataLogs({
        idNode: req.body.idNode,
        waterLevel: req.body.waterLevel,
        timestamp: req.body.timestamp
    })
    data.save((err, doc) => {
        !err ? res.status(200).send({
            message: "Success input single data"
        }) : res.send(err)
    })
}
