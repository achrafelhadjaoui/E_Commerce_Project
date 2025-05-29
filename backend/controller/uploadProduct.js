const productModel = require("../models/productModel")

async function UploadProductController(req, res) {
    try {
        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()


        res.status(201).json({
            message: "product upload succefully",
            error: false,
            success: true,
            data: saveProduct
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = UploadProductController