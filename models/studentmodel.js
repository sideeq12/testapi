const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

const studentSchema = new Schema({
    student_number : objectId,
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
    year_of_admission : {
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
    profile_picture : {
        type : String,
        required : [true, "please upload profile picture"]
    },
    Hall_of_residence : {
        hall_name : String,
        block : String,
        room_number : Number,
    } || Boolean
}, {
    timestamps : true
})

const studentModel  = mongoose.model("Students", studentSchema);


module.exports = studentModel;