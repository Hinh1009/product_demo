const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const schema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,'Yêu cầu title']
    },
    // categories:{
    //     type:[ObjectId],
    //     ref:'categories'
    // }
    categories:[{
        type:ObjectId,
        ref:'categories'
    }],
    avatar:{
        type: String,
        required:[true,"Yeu cau ava"]
    },
    description:{
        type: String,
        required:[true,"Yeu cau mo ta sp"]
    },
    price:{
        type: Number,
        required:[true,"Yeu cau gia sp"]
    }
})

module.exports = schema