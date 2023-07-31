const mongoose = require('mongoose');   
const uri = process.env.MONGO_URL

const connectDB = () => {
    console.log('database connecting')
    return mongoose.connect(uri , {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}

module.exports =  connectDB