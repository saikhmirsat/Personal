const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    role: { type: String, default: "user" },
    firstname: String,
    lastname: String,
    dob: String,
    email: String,
    password: String,
    registerfulldate: String,
    registeryear: Number,
    gender: String,
    avatar: { type: String, default: "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" }
}, {
    versionKey: false
})

const UserModel = mongoose.model("registerusers", userSchema)

module.exports = {
    UserModel
}

// {
//     "firstname": "Saikh",
//     "lastname": "Mirsat",
//     "dob": "06/05/99",
//     "email": "saikh@gmail.com",
//     "password": "Misu@786"
//     "registerfulldate":"21/04/1999",
//     "registeryear":2012
// }
