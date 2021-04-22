const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name :{type:String,
        required:true},
    author:{type:String,
        required:true},
    tags:{type:Array,
        required:true},
    date:{type:Date,default:Date.now},
    isPublished:{type:Boolean,
        required:true}
})

module.exports = mongoose.model('Course',courseSchema)