'use strict';
const express = require("express");

const app=express();

function start(port){
    app.listen(port,()=>{
        console.log(`app is running on port: ${port}`);
    })
}


app.get('/',(req,res)=>{
    res.send("home route");
})
app.get('/data',(req,res)=>{
    res.json({
        name:"salah",
        age:22,
        email:"salahqasm@outlook.com"
    });
})

module.exports={
    app:app,
    start:start
}