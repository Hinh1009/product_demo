const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/test'
const db = mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Connect success to MongoDB')
})
.catch(err =>{
    console.error(" Connect failed to mongoDB")
    console.error(err)
})

module.exports = db