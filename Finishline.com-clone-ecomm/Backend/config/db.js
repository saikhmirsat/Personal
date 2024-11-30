const mongoose = require("mongoose");
require('dotenv').config()

const connection = mongoose.connect("mongodb+srv://sportszone:sportszone@cluster0.7m7kbgf.mongodb.net/sportszone?retryWrites=true&w=majority")

module.exports = {
    connection
}