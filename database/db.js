const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/[Database-Name]') // => You should change database name with your own database

const Conn = mongoose.model('posts', postSchema)

module.exports = Conn