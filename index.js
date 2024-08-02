const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const TodoModel = require("./model/todo")

const app = express();
dotenv.config();
const connect = async  () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongodb");
      } catch (error) {
        throw(error);
      }
    };


app.use(express.json());
app.use(cors());

app.get('/get', (req,res) =>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => console.log("err", err));
})

app.post('/add' ,(req,res) =>{
    const task = req.body.task
    TodoModel.create({
        task:task
    }).then(result => res.json(result))
    .catch(err=> res.json(err));
})

app.put('/update/:id', (req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id:id}, {done:true})
    .then(result=> res.json(result))
    .catch(err=> res.json(err));

})
app.delete('/delete/:id', (req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result=> res.json(result))
    .catch(err=> res.json(err))


})

app.listen(8000, ()=>{
    connect();
    console.log("port is ruuning on 8000");
})