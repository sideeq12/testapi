const express = require("express");
const Model = require("../models/studentmodel");
const router  = express.Router();

router.route("/")
.get(( req, res)=>{
    res.status(200).json({
        msg : "success get"
    })
})
.post((req, res)=>{
    const { first_name , last_name , other } = req.body;
    try { 
        const newStudent = Model.create(req.body);
        res.status(200).send(newStudent);
    }catch(err){
        console.log(err);
    }
})
.put((req, res)=>{
    res.status(200).json({
        msg : "success put"
    })
})
.delete((req, res)=>{
    res.status(200).json({
        msg : "success delete"
    })
})

router.route("/:id")
.get(( req, res)=>{
    res.status(200).json({
        msg : "success get"
    })
})
.post((req, res)=>{
    res.status(200).json({
        msg : "success post"
    })
})
.put((req, res)=>{
    res.status(200).json({
        msg : "success put"
    })
})
.delete((req, res)=>{
    res.status(200).json({
        msg : "success delete"
    })
})

module.exports = router;