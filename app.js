const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");



const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');


// let currentDay = today.getDay();
// let day ="";
let items = [];
let workItems =[];
app.get("/",function(req, res){

// switch(currentDay){
//   case 0:
//   day="Sunday";
//   break;
//   case 1:
//   day="Monday";
//   break;
//   case 2:
//   day="Tuesday";
//   break;
//   case 3:
//   day="Wednesday";
//   break;
//   case 4:
//   day="Thursday";
//   break;
//   case 5:
//   day="Friday";
//   break;
//   case 6:
//   day="Saturday";
//   break;
//   default:
//   console.log("Error the current day is equal to "+ currentDay);
// }


let day = date();
res.render("list",{listTitle: day, newlist: items });
});

app.post("/",function(req,res){
 item = req.body.newItem ;



 if(req.body.list === "Work"){
 workItems.push(item);
 res.redirect("/work");
 }
 else{
   console.log(item);
   items.push(item);
   res.redirect("/");

 }




});

app.get("/work",function(req,res){
res.render("list",{listTitle: "Work List" , newlist: workItems });
});


app.post("/work",function(req,res){
  item = req.body.newItem ;

  console.log(item);
  workItems.push(item);

  res.redirect("/work");
});


app.listen(3000,function(){

console.log("Server started on port 3000");

});
