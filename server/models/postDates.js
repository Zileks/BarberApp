const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
        barber:String,
        time:String,
        date:String,
        email:String,
        customer:String,
        phone:String,
});

const PostDate = mongoose.model('PostDate', postSchema)

module.exports = PostDate;