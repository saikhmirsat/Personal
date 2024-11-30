const mongoose = require('mongoose')

const Connection = mongoose.connect('mongodb+srv://numetry:numetry@cluster0.2ba9eik.mongodb.net/BlogAppBharatIntern?retryWrites=true&w=majority');

module.exports = {
    Connection
}