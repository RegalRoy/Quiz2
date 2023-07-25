const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    name:{type:String, required:true},
    sid:{type:Number, required:true}
})


const Quiz = mongoose.model("QUIZ", quizSchema, "quiz2")

module.exports = Quiz