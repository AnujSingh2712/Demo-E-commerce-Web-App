const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    userName:String,
    email:String,
    password:String,
    contact:Number,
})

module.exports = new mongoose.model('user',schema)