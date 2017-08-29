var express=require('express');
var app=express();
var bodyParser=require("body-parser");
app.set("view engine", "hbs");
app.set("views","./views");
var logger = require("morgan");
app.use(logger('dev'));
app.use("/",bodyParser.urlencoded({extended:false}));
app.listen(3000);
app.use("/static",express.static(__dirname+"/public"));

app.post("/submit",function(req,res)
{
    var str=req.body.dob;
    var arr=str.split('-');
    var d=new Date(arr[0],arr[1]-1,arr[2]);
    console.log(d.toDateString());
    var dn=new Date();
    var k=(dn-d)/(1000*60*60*24);
    var days=k.toFixed();
    res.render("index",{sometitle:"days calculator",name:req.body.firstname,day:days});
});
