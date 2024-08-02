const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({
    task:String,
    done:{
        type:String,
        default:false
    }
})
const TodoModel = mongoose.model("todos", todoschema);
module.exports = TodoModel;