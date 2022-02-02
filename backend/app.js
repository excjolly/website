const express = require("express");
const mongoose = require("mongoose");
var app = express();


mongoose.connect("mongodb+srv://excelsior:coder@cluster0.hmmr0.mongodb.net/excelsior", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.get("/",function(request,response){
response.send("Hello World!")
})
app.listen(5000, function () {
console.log("Started application on port %d", 5000)
});