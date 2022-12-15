const { authJwt } = require("../middleware");
const auth = require('../controller/auth.controller')
const user = require('../controller/user.controller');
const users = require("../model/user.model");


module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        )
        next();
    })

    app.get("/api/user/all", [authJwt.verifyToken], user.getAllUser)
    app.post("/api/user/admin_signup", [authJwt.verifyToken], user.postNewAdmin)
    app.post("/api/user/signup", user.postNewUser)
    app.post("/api/user/signin", auth.signin)
    app.put("/api/user/userVerify", [authJwt.verifyToken], user.userVerify)
}