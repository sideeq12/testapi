const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.json({
        msg : "all list"
    })
})

app.get("/students", (req, res)=>{
    res.json({
        msg : "student list"
    })
})



app.listen(3000, ()=>{
    console.log("server running on port : 3000")
})