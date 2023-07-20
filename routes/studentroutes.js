const express = require("express");

const router  = express.Router();

router.route("/")
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