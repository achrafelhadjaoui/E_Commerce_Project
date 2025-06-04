const userModel = require("../../models/userModel")

async function userDetailsController(req, res){
    try {
    
        const{id} = req.user
        const user = await userModel.findById(id);

        if(!user) {
            throw new Error("user not found")
        }

        res.status(200).json({
            message: "User fetched successfully",
            data: user,
            error: false,
            success: true,
          });
        
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = userDetailsController