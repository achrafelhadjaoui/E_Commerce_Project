const userModel = require("../../models/userModel")
const bcrypt = require('bcryptjs')

async function userSignUpController(req, res) {
    try {
        const {email, password, name} = req.body

        const user = await userModel.findOne({email});

        if (user){
            throw new Error("User already exist")
        }

        if(!email){
            throw new Error("Please povide email")
        }
        if(!password){
            throw new Error ("Please provide password")
        }
        if(!name){
            throw new Error ("Please provide name")
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)
        
        if(!hashPassword){
            throw new Error("Somthing is wrong")
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        }

        const userData = new userModel(payload);
        const SaveUser = await userData.save()

        res.status(201).json({
            data: SaveUser,
            success: true,
            error: false,
            message: "User created Successfully"
        })
        
    } catch (error) {
        res.json({
            message: error.message,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignUpController