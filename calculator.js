const express = require("express");
const bodyParser = require("body-parser");


const res = require("express/lib/response");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res)
{
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res)
{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var re = num1 + num2; 
    res.send("The result is: "+ re);
});

app.listen(3000 , function()
{
    console.log("Started 3000 server");
})