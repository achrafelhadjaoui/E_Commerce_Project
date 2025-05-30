const uploadProductPermission = require('../helpers/permission');
const productModel = require('../models/productModel');

async function updateProductController(req, res) {
    try {

        // permission which only the admin can update the product
        const sessionUserId = req.user.id;
        
            const hasPermission = await uploadProductPermission(sessionUserId); // ✅ await here
        
            if (!hasPermission) {
              throw new Error('Permission Denied')
            }

            const {_id, ...resBody} = req.body
            
            const updateProduct = await productModel.findByIdAndUpdate(_id, resBody, {new:true})

            res.json({
                message: "updated succefuly",
                error: false,
                success: true,
                data: updateProduct
            })


        
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success:false
        })
    }
}

module.exports = updateProductController