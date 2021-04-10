import Router from "express"
const router = new Router()
import User from "../models/users.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const generateToken = (id) => {
    const payload = {id}
    return jwt.sign(payload, process.env.SECRET , {expiresIn: "1h"} )
}

router.route("/signup")
    .post(async (req, res) => {
        try {
            const { name, sex, email, password } = req.body
            const account = await User.findOne({ email })
            if (account) {
                return res.status(400).json({ message: "Email already exist" })
            }
            const hashPassword = bcrypt.hashSync(password, 3)
            const newAccount = new User({ name,email,sex, password: hashPassword })
            newAccount.save()
            const token = generateToken(newAccount._id)
            return res.status(200).json({token})
        } catch (e) {
            res.status(400).json({ message: "signup error" })
        }
    })

router.route("/login")
    .post(async (req, res) => {
        try {
            const { email, password } = req.body
            const account = await User.findOne({ email: email })
            if (!account) {
                return res.status(400).json({ message: "Wrong email" })
            }
            const truePassword = bcrypt.compareSync(password, account.password)
            console.log(truePassword);
            if (!truePassword) {
                console.log(123);
                return res.status(400).json({ message: "Wrong password" })
            }
            // const token = generateToken(account._id)
            console.log(145);
            return res.status(200).json({token})
        } catch (e) {
            res.status(400).json({ message: "login error" })
        }
    })

    export default router