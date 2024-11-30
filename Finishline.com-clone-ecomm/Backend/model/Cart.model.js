const mongoose = require("mongoose")

const CartSchema = mongoose.Schema({
    gender: String,
    category: String,
    sub_category: String,
    color: String,
    image: String,
    title: String,
    price: String,
    quntity: Number,
    size: String,
    brand: String,
    user: String
}, {
    versionKey: false
})

const CartModel = mongoose.model("cartproducts", CartSchema)

module.exports = {
    CartModel
}

