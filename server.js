'use strict';
// require('dotenv').config();
let express=require('express');
let server=express(); // to reach the express we call it as a function
const PORT =process.env.PORT||5000; // to give our website port number.
server.use(express.static('./public'));// to connect the files in my machine

server.get('/test',(request,response)=>{
    let train={
        travelTime:Date.now(),
        canfly:'Surly noooo',
        color:'my Favorite.. blue',
        selfDrriviving:true
    }
    response.status(200).json(train);

});




server.listen(PORT,() =>{
    console.log(PORT);
});