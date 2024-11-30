const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    for_whom: String,
    category: String,
    sub_category: String,
    rating: Number,
    brand: String,
    title: String,
    price: Number,
    color: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    image6: String,
    vedio: String,
    quantity: Number,
    size: Array,
    now: String,
    product_detail_size: String,
    product_detail_features: String,
    stock: Number
}, {
    versionKey: false
})

const ProductsModel = mongoose.model("products", productSchema)
module.exports = {
    ProductsModel
}