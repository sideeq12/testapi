const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    first_name : {
        type : String,
        required : [true, "please enter a valid first name"]
    },
    last_name : {
        type : String,
        required : [true, "please enter a valid last name"]
    },
    other : {
        type : String,
        required : [true, "please enter a valid other name"]
    },
    matric : {
        type : String,
        required : [true, "please enter a valid  matriculation number"]
    },
    year_admission : {
        type : Number,
        required : [true, "please enter a valid year of admision"]
    },
    faculty : {
        type : String,
        required : [true, "please enter a valid faculty"]
    },
    department :{
        type : String,
        required : [true, "please enter a valid department"]
    },
    course_of_study : {
        type : String,
        required : [true, "please enter a valid course of study"]
    },
    current_level : {
        type : String,
        required : [true, "please enter a valid level"]
    }, 
    image : {
        type : String,
        required : [true, "please upload profile picture"]
    },
    Hall_of_residence : {
        hall_name : String,
        block : String,
        room_number : Number,
    } || Boolean
})


module.exports = studentSchema;