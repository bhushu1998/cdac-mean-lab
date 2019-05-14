const express=require('express');
const port=9339;

var app=express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html',(err)=>{
        if(err){
            console.log(err);
        }
    });
});

app.listen(port,()=>{
    console.log("Server running");
});