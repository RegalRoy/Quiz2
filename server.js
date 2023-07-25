const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 7000;
const app = express();
app.use(cors());
app.use(express.json());
let Quiz = require('./Quiz.model')
//uri
//mongodb://127.0.0.1:27017/testDB
const uri2 = "mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exam"
const uri = "mongodb+srv://cruzroyregal:Today.123@cluster0.wxjmq41.mongodb.net/Exam"
// const uri = "mongodb://127.0.0.1:27017/Exams"
mongoose.connect(uri2,{useNewUrlParser:true, useUnifiedTopology:true})
//connect uri
mongoose.connection.once('open',()=>{console.log("COnnected to mongoose...")})

app.get('/',(req,res)=>{
    const name = "Regal Roy A . Cruz";
    const sid = 300354149;
    const quizObj = new Quiz({name, sid});
    Quiz.deleteMany().then(r=>{
        Quiz.insertMany([quizObj]).then(r=>res.json(r));
    }
    )
})

// app.post('/',(req,res)=>{
//     const name = req.body.name;
//     const sid = req.body.sid;
//     const quizObj = new Quiz({name, sid});
//     Quiz.deleteMany().then(r=>{
//         // Quiz.insertMany([quizObj]).then(r=>res.json(r));
//         Quiz.create(quizObj).then(r=>res.json(r))
//     })
// })

app.listen(port,()=>{console.log("SERVER RUNNING on 7k")})

// Quiz.insertMany([quizObj]).then(r=>res.json(r));
