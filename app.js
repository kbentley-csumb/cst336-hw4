const express = require("express");
const app = express();
var faker = require('faker');


app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/",function(req,res) {
    res.render("index.html");
});

app.get("/gis", function(req, res) {
    var randomName = faker.name.findName(); 
    var randomEmail = faker.internet.email();
    res.render("gis.html", {"fakeName" : randomName, "fakeEmail" : randomEmail });
});

app.get("/embedded", function(req, res) {
    var randomName = faker.name.findName(); 
    var randomEmail = faker.internet.email();
    res.render("embedded.html", {"fakeName" : randomName, "fakeEmail" : randomEmail });
});

app.get("/ci", function(req, res) {
    var randomName = faker.name.findName(); 
    var randomEmail = faker.internet.email();
    res.render("ci.html", {"fakeName" : randomName, "fakeEmail" : randomEmail });
});


app.listen("8081","0.0.0.0",function() {
//app.listen(process.env.PORT,process.env.IP,function() {
    console.log("Express Server is Running...")
});
