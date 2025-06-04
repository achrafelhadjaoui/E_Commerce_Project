const userModel = require("../../models/userModel")

async function allUsers(req, res) {
    try {
        

        const allUsers = await userModel.find()

        res.json({
            message: "all users",
            data: allUsers,
            error: false,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = allUsers