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
con.connect(function (error) {
    if (error) throw error;
    console.log("mysql connected");

})
app.get("/", function (req, res) {
    console.log("welcome");
    con.query("select * from data", function (error, result) {
        console.log(result);
        res.json(result);
    });
});
app.get("/filter", function (req, res) {
    console.log(req.query);
    var query = null, count = 0, conditionalString = "";
    // var direction = req.query.direction;

    // var date = req.query.date;
    // var price = req.query.price;
    // var save = req.query.save;
    // var places = req.query.places;
    // var status = req.query.status;
    // // console.log(direction)
    // var key = null,value = null,finalQuery= null;
    // if(direction != undefined) {
    //     key = "direction";
    //     value = "'%"+direction+"%'";
    // }else if(date != undefined) {
    //     key = "date";
    //     value = "'%"+date+"%'";
    // }else if(price != undefined) {
    //     key = "price";
    //     value = "'%"+price+"%'";
    // }else if(save != undefined) {
    //     key = "save";
    //     value = "'%"+save+"%'";
    // }else if(places != undefined) {
    //     key = "places";
    //     value = "'%"+places+"%'";
    // }else if(status != undefined) {
    //     key = "status";
    //     value = "'%"+status+"%'";
    // }
    // if(key == null && value == null) {
    //     finalQuery = "select * from data";
    // }else {
    //     finalQuery = "select * from data where "+key+" like "+value;
    // }
    //"select * from data where "+key+" like "+value
    // console.log("key = "+key+" value = "+value);
    // console.log("select * from data where "+key+" like "+value);


    var sort = req.query.sort;
    var filter = req.query.filter;
    if (filter != undefined) {
        count = 0;
        for (var key in filter) {
            console.log(key + " = " + filter[key]);
            if (filter[key] != "") {
                if (count == 0) {
                    conditionalString = " where " + key + " like '%" + filter[key] + "%'";
                } else if (count > 0) {
                    conditionalString = conditionalString + " and " + key + " like '%" + filter[key] + "%'";
                }
                count++;
            }
        }
        count = 0;
        console.log(conditionalString);
    } else {
        console.log("filter is null");
    }


    con.query("select * from data" + conditionalString, function (error, result) {
        //date,price,save,palces,status
        if (error) throw error;
        //console.log(result);
        res.json(result);
    });
});
app.listen("3000", function () {
    console.log("connnected to port 4000");
});