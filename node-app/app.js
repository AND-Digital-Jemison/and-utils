const path = require("path");
const express = require("express");
const app = express(); // create express app
var cors = require('cors')

app.use(cors())

app.use(express.static("dist"));

app.get("/api/test", (req, res) => {
    res.send({msg: 'You just called /api/test in node-app/app.js'});
});

app.listen(3004, () => {
    console.log("server started on port 3004");
});
