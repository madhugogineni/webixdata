var express = require('express');
var mysql = require('mysql');
var app = express();
app.get("/webix-data",function(req,res) {
    console.log("welcome");
});
app.listen("4000",function() {
    console.log("connnected to port 4000");
})