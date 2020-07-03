const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const schema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, 'Yeu cau title!'],
        unique: true
    },
    description: String
})


module.exports = schema