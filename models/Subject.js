const mongoose = require("../db/connection.js")
const Schema= mongoose.Schema;



const Subject= new Schema({
    name: String,
    link: String,
    imglink: String
})






module.exports= mongoose.model("Subject", Subject)