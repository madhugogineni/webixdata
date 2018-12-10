var express = require('express');
var mysql = require('mysql');
var app = express();
var cors = require('cors')
app.use(cors())
var mysqlcredentials = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "webix"
}
var con = mysql.createConnection(mysqlcredentials);
con.connect(function(error) {
    if(error) throw error;
    console.log("mysql connected");

})
app.get("/",function(req,res) {
    console.log("welcome");
    con.query("select * from data",function(error,result) {
        console.log(result);
        res.json(result);
    });
});
app.get("/filter",function(req,res) {
    console.log("welcome");
    con.query("select * from data",function(error,result) {
        console.log(result);
        res.json(result);
    });
});
app.listen("3000",function() {
    console.log("connnected to port 4000");
})