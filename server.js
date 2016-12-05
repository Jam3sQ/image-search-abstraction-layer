'use strict'; 

const express = require("express"); 
const app = express(); 
const bing = require('node-bing-api')({ accKey: '7c467ba612e2420fb138f3bfc51f1312' }); //Using bing search API
const port = process.env.PORT || 8080; //Setting port 

//Routes 

//Landing page 
app.get('/', function(req, res) {
    res.end("Hi");
}); 

//Search images     
app.get('/api/imagesearch/:search', function(req, res){
    
    //Use bing image search to find images 
    bing.images(req.params.search, {
        top: 5,   // Number of results (max 50) 
         }, function(error, response, body){
             
            if(error) console.error(error); 
            var object = []; 
            for(var i = 0; i < body.value.length; i++){
                object[i] = {
                  'url': body.value[i].contentUrl,  
                  'snippet': body.value[i].name, 
                  'thumbnails': body.value[i].thumbnailUrl, 
                  'context': body.value[i].hostPageUrl
                }; 
      
            }
            
            //output images to user 
            res.end(JSON.stringify(object));
             
        });
        
});   

app.listen(port, function(){
    console.log("App is listening on port:" + port); 
})