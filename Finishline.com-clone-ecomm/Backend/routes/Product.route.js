const express = require("express")
const { ProductsModel } = require("../model/Product.model")

const productRoute = express.Router()

productRoute.get("/", async (req, res) => {
    const user_id_making_req = req.body.user
    try {
        let data = await ProductsModel.find({ user: user_id_making_req })
        res.send(data)
    } catch (err) {
        res.send("Can't find product")
    }
})

productRoute.get("/:_id", async (req, res) => {
    const user_id_making_req = req.body.user
    const { _id } = req.params
    try {
        let data = await ProductsModel.find({ user: user_id_making_req, _id })
        res.send(data)
    } catch (err) {
        res.send({ "msg": "Can't find" })
    }
})

productRoute.post("/add", async (req, res) => {
    try {
        const product = new ProductsModel(req.body)
        await product.save()
        res.send({ "success": true, "msg": "Product has been added" })
    } catch (err) {
        res.send({ "success": false, "msg": "Product is not added" })
        console.log(err)
    }
})

productRoute.patch("/update/:id", async (req, res) => {
    const payload = req.body
    const id = req.params.id

    try {
        await ProductsModel.findByIdAndUpdate({ "_id": id }, payload)
        res.send({ "success": true, "msg": "Product has been updated" })
    } catch (err) {
        res.send({ "success": false, "msg": "Product not updated" })
    }
})

productRoute.delete("/delete/:id", async (req, res) => {
    const id = req.params.id

    try {
        await ProductsModel.findByIdAndDelete({ "_id": id })
        res.send({ "success": true, "msg": "Product has been Deleted" })
    } catch (err) {
        res.send({ "success": false, "msg": "Product not Deleted" })
    }
})

module.exports = {
    productRoute
}