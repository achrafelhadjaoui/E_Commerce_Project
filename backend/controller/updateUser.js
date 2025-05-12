const userModel = require("../models/userModel")

async function updateUser(req, res) {
    try {
        const sessionUser = req.user.id

        const {userId, email, name, role} = req.body
        
        const payload = {
            ...(email && { email : email}),
            ...(name && { name : name}),
            ...(role && { role : role})
        }

        const user = await userModel.findById(sessionUser)
        console.log("this is user1" ,user)
        const user2 = await userModel.findById(userId)

        console.log("this is user2" ,user2)
        

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)

        console.log("this is the payload" ,payload)
        console.log("this is the req.body" ,req.body)


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