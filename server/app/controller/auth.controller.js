const config = require("../config/auth.config")
const db = require("../model")
const User = db.user

const jwt = require('jsonwebtoken')
var bcrypt = require("bcryptjs")

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return;
        }

        if (!user) {
            return res.status(404).send({ message: "User Not found." })
        }

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                auth: false,
                id: req.body.id,
                accessToken: null,
                message: "Error",
                errors: "Invalid credentials"
            });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: user._id,
            accessToken: token,
        });
    })
};