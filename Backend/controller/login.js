const usermodel = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require('dotenv').config()


exports.user = async (req, res) => {
    try {
        const existuser = await usermodel.findOne({ email: req.body.email })
        if (existuser) {
            console.log("this user already axist")
        }
        else {
            const hashpassword = await bcrypt.hash(req.body.password, 10)
            const obj = {
                userName: req.body.userName,
                email: req.body.email,
                password: hashpassword,
                contact: req.body.contact
            }
            await usermodel.create(obj)

            res.status(200).json({
                error: false
            })
        }
    } catch (error) {
        console.log(error, "error")
    }
}


exports.login = async (req, res) => {
    const existUser = await usermodel.find({ email: req.body.email })
    console.log(existUser)
    if (existUser) {
        console.log(req.body.password)
        console.log(existUser.password)
        const passwordMatch = await bcrypt.compare(req.body.password, existUser[0].password)
        if (passwordMatch) {
            const token = jwt.sign({ _id: existUser._id }, process.env.SECRET_KEY)
            res.status(200).json({
                token: token,
                error: false
            })
        } else {
            res.status(200).json({
                error: true
            })
        }
    }else{
        console.log("unAuthorised access !")
    }
}