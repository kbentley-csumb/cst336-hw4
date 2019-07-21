const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/",function(req,res) {
    res.render("index.html");
});

app.get("/gis", function(req, res) {
    res.render("gis.html");
});

app.get("/embedded", function(req, res) {
    res.render("embedded.html");
});

app.get("/ci", function(req, res) {
    res.render("ci.html");
});


app.listen("8081","0.0.0.0",function() {
//app.listen(process.env.PORT,process.env.IP,function() {
    console.log("Express Server is Running...")
});
