import Router from "express"
const router = new Router()
import User from "../models/users.js"
import mailgunloader from "mailgun-js"

let mailgun = mailgunloader({
  apiKey: "314dabc3ae21d45be364054925982401-a09d6718-049288a7",
  domain: "sandboxd529c04ee6974ee48d97f3c76df3b7d1.mailgun.org"
})

const sendMail = (to,from,sub,content) => {
  let data = {
    to,from,sub,text: content
  }
  return mailgun.messages().send(data)
}

router.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ success: false })
  }
})

router.post('/api/contact', async(req,res,next) => {
  try{
      await sendMail("kristina.car@mail.ru", "no-reply@test.com", "Hello", "Helllllloooooo")
  res.send("email sent")
  } catch (e) {
    console.log(e)
    res.status(500)
  }
})

export default router
