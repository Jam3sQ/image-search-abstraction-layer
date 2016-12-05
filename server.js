'use strict'; 
const express = require("express"); 
const app = express(); 
const bing = require('node-bing-api')({ accKey: '7c467ba612e2420fb138f3bfc51f1312' }); 
const port = process.env.PORT || 8080; 

bing.images("Ninja Turtles", {
  top: 15,   // Number of results (max 50) 
  skip: 3    // Skip first 3 result 
  }, function(error, res, body){
    console.log(body);
  });

//Two routes

//Image search 
//Takes 2 parameters




//Whatever you're searching for 
    // I can get the image URLs, alt text and page urls for 
    // a set of images relating to a given search string.
app.get('/api/imagesearch/:search', function(req, res){
    console.log(req.params.search + " " + req.query.offset); 
});   

    
//pagination 
//
//Past image searches
app.listen(port, function(){
    console.log("App is listening on port:" + port); 
})