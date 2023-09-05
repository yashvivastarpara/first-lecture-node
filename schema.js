const mongoose= require('mongoose');
let stdschema = new mongoose.Schema({
    name:String,
    number:Number,
    email:String,
    password:String
})

const schema= mongoose.model("schema",stdschema);

module.exports=schema