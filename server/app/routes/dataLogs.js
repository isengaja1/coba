const { authJwt } = require("../middleware");
const dataLogs = require('../controller/dataLogs.controller')

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        )
        next();
    })

    app.get("/api/data-logs", [authJwt.verifyToken], dataLogs.getAllData)
    app.get("/api/data-logs/:_id", [authJwt.verifyToken], dataLogs.getById)
    app.post("/api/data-logs/add-single-data", dataLogs.insertSingleData)
    app.post("/api/data-logs/add-data", dataLogs.insertJSON)
}