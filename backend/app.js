const express = require("express");
const path = require('path');

const app = express();
app.use(express.json());

app.get("/",function(request,response){
    response.send("Hello World!")
});

module.exports = app;