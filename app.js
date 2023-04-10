//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todolistv2DB").then(() => console.log("It ran")).catch((err) => console.error(err))


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const itemsSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({
  name: "Welcome to your todoList!"
});

const item2 = new Item ({
  name: "Hit the + button to add new task."
});

const item3 = new Item ({
  name: "<-- Hit this after completing the task."
});

const defaultItems = [item1, item2, item3];

//Item.insertMany(defaultItems);




app.get("/", function(req, res) {

  Item.find({Item})
.then(function(err, foundItems){res.render("list", {listTitle: "Today", newListItems: foundItems});})
.catch(error => console.log(error));

  

});

app.post("/", function(req, res){

  const item = req.body.newItem;

});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
