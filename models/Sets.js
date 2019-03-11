const mongoose = require("../db/connection.js")
const Schema= mongoose.Schema;

const Subject= new Schema ({
    name: String,
    link: String,
})

const Topics= new Schema({
    name: String,
    link: String,
})

const Sets= new Schema({
    name: String,
    link: String,
})

module.exports= mongoose.model("Sets", Sets)