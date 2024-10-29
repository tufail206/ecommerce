let mongoose = require('mongoose')
let url=process.env.MONGO_URL
// Connect to MongoDB
let ConnectDb=async ()=>{
    await mongoose.connect(url)
}

module.exports = ConnectDb