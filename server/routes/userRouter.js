import Router from "express"
const router = new Router()
import User from "../models/users.js"
import nodemailer from "nodemailer"
import verToken from '../middlware/auth.js'

router.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ success: false })
  }
})

router.post('/api/contact', verToken, async(req,res,next) => {
  try{
    const {message, ownerId, from, userEmail} = req.body
    const user = await User.findById(ownerId)
    let transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "meet-up", 
        pass: "Elbrus123", 
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'meet-up@mail.ru', 
      to: user.email,
      subject: "Запрос на добавление MEETUP", 
      text: `Сообщение от ${from}:
      ${message}
      Моя почта для связи: ${userEmail}`, 
    });
  res.send({status: true})
  } catch (e) {
    console.log(e)
    res.status(500)
  }
})

export default router
