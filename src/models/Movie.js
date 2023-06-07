const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength: 30
    },
    rating:{
        type:Number,
        required:true,
        min:[3,`can't store movies with rating less than 3`],
        max:[10,`ratings above 10 is not allowed`]
    },
    img_url:{
        type:String
    },
    released_date:{
        type:String,
        required:true
    }
})

const Movie = mongoose.model('Movie',movieSchema)

module.exports = Movie