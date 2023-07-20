const express = require("express");
const mongoose = require("mongoose");


const app = express();
const studentRouters = require("./routes/studentroutes");
app.use("/student", studentRouters);

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



mongoose.connect("mongodb+srv://test:Newlayer12!@tritezcluster.uqtqk.mongodb.net/students?retryWrites=true&w=majority")
.then(app.listen(3000, ()=>{
    console.log("connected to DB")
    console.log("server running on port :  3000")
}))
.catch((err)=>{
    console.log(err)
})