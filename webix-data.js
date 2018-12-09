var express = require('express');
var mysql = require('mysql');
var app = express();
app.get("/",function(req,res) {
    console.log("welcome");
    res.send("working!")
});
app.listen("3000",function() {
    console.log("connnected to port 4000");
})