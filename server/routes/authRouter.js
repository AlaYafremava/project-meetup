import Router from "express"
const router = new Router()
import User from "../models/users.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import secret from "../config.js"


const generateToken = (id) => {
    const payload = {id}
    return jwt.sign(payload, secret.secret , {expiresIn: "1h"} )
}

router.route("/signup")
    .post(async (req, res) => {
        try {
            const { name, email, password } = req.body
            console.log(name,email);
            const account = await User.findOne({ email })
            if (account) {
                return res.status(400).json({ message: "Email already exist" })
            }
            const hashPassword = bcrypt.hashSync(password, 3)
            const newAccount = new User({ name,email, password: hashPassword })
            newAccount.save()
            return res.status(200).json({ message: "Account's registration done" })
        } catch (e) {
            res.status(400).json({ message: "signup error" })
        }
    })

router.route("/login")
    .post(async (req, res) => {
        try {
            const { email, password } = req.body
            console.log(email, password);
            const account = await User.findOne({ email: email })
            console.log(account);
            if (!account) {
                return res.status(400).json({ message: "Wrong email" })
            }
            const truePassword = bcrypt.compareSync(password, account.password)
            console.log(truePassword)
            if (!truePassword) {
                return res.status(400).json({ message: "Wrong password" })
            }
            const token = generateToken(account._id)
            console.log(token);
            return res.status(200).json({token})
        } catch (e) {
            res.status(400).json({ message: "login error" })
        }
    })

    export default router