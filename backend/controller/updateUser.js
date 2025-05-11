const userModel = require("../models/userModel")

async function updateUser(req, res) {
    try {
        const sessionUser = req.user.id

        const {userId, email, name, role} = req.body.role
        
        const payload = {
            ...(email && { email : email}),
            ...(name && { name : name}),
            ...(role && { role : role})
        }

        const user = await userModel.findById(sessionUser)

        console.log("this is session user" ,user)

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)

        res.json({
            message: "User Updated",
            data: updateUser,
            success: true,
            error: false
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = updateUser