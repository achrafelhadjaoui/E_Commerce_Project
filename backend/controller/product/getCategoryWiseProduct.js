const productModel = require("../../models/productModel")

const getCategoryWiseProduc = async(req, res)=>{
    try {
        const {category} = req.body || req.query
        const product = await productModel.find({category})

        res.json({
            message: "poduct",
            data: product,
            success: true,
            error: false
        })

    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = getCategoryWiseProduc