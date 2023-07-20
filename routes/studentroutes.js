const express = require("express");
const Model = require("../models/studentmodel");
const router  = express.Router();

router.route("/")
.get(async ( req, res)=>{
    try {
        const students = await Model.find({});
        res.status(200).json(students);

    }catch(err){
        res.status(500).json({
            msg : err.message
        })
    }
})
.post( async (req, res)=>{
    const { first_name ,   last_name , other ,
        year_of_admission, matric, faculty ,
     department , course_of_study,current_level,
     profile_picture, hall_of_residence
   } = req.body;
    try { 
        const newStudent = await  Model.create(req.body);
        res.status(200).json(newStudent);
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
.get( async ( req, res)=>{
    console.log("the id is ", req.params.id)
    try { 
        const { id  } = req.params;
        const mystudent = await Model.findById("64b9600d7ed7e14f5c8a676e");
        res.status(200).json(mystudent);
    }catch(err){
        console.log(err);
    }
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