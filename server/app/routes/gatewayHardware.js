const { authJwt } = require("../middleware");
const gateway = require('../controller/gateway.hardware')

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        )
        next();
    })

    app.get("/api/gateways", [authJwt.verifyToken], gateway.getAllData)
    app.post("/api/gateways/generate", [authJwt.verifyToken], gateway.generateGateway)
}