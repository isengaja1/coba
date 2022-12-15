const express = require('express')
const app = express()
const db = require("./app/model");
const bodyParser = require('body-parser')
const cors = require('cors')

require("dotenv").config()
app.use(bodyParser.json())
app.use(cors())

// DB CONNECTION
db.mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });


// ROUTES
require('./app/routes/dataLogs')(app);
require('./app/routes/user')(app);
require('./app/routes/gatewayHardware')(app);

const PORT = process.env.PORT || 5000
app.listen(PORT, function () {
    console.log("Server is running on port 5000")
});

