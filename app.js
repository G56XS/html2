const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/redirect.html");
});
app.listen(80, function () {
    console.log("Server is running on localhost80");
});