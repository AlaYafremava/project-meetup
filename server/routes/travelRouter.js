import Router from 'express'
const router = new Router()
import User from "../models/users.js"
import Travel from "../models/travels.js"
import Image from "../models/images.js"
import verToken from "../middlware/auth.js"
import path from "path"
import multer from 'multer'

const storage = multer.diskStorage({
    destination: 'upload/images',
    filename: function (req, file, cb) {
      cb(null, path.join(Date.now() + '-' + file.originalname.replace(/\.jpg/, '')))
    }
  })
  const fileFilter = (req, file, cb) => {

    if(file.mimetype === "image/png" || 
    file.mimetype === "image/jpg"|| 
    file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
  }
const upload = multer({ storage:storage, fileFilter:fileFilter })

router.post('/upload', upload.single('photo'), async (req,res) => {
    console.log(req.file)
    })

router.get('/travels', verToken, async (req, res) => {
    try {
        const travels = await Travel.find()
        if (!travels) {
            return res.status(400).json({
                message: 'Travels not found',
            })
        }
        return res.status(200).json({ travels, success: true })
    } catch (e) {
        res.status(400).json({ message: 'Travels load error' })
    }
})

router.post('/travels/new', verToken, async (req, res) => {
    try {
        const { title, description, country, city, startDate, finishDate, number, src } = req.body
        const userAddNewTravel = await User.findOne({ _id: req.user.id })
       
        const newTravel = await Travel.create({
            title,
            description,
            country,
            city,
            startDate,
            finishDate,
            number,
            owner: userAddNewTravel,
            src: [src]
        })
        const newImage = await Image.create({
            src: src,
            imgTravel: newTravel
        })

        await User.findByIdAndUpdate(req.user.id, { $push: { userTravels: newTravel } })
        if (newTravel) {
            return res.status(200).json({ newTravel, success: true })
        }
    } catch (e) {
        console.error(e.message)
        res.status(400).json({ message: 'Travel create error' })
    }
})

router.get("/travels/:id", (async (req, res) => {
    const { id } = req.params
    try {
        const travel = await Travel.findOne({ _id: id })
        if (!travel) {
            return res.status(400).json({
                message: "Travels not found"
            })
        }
        return res.status(200).json({ travel, success: true })
    } catch (e) {
        res.status(400).json({ message: "Travels load error" })
    }
}))

router.put("/travels/:id", verToken, upload.single('photo'), async function (req, res, next) {
    const {
        id,
        title,
        description,
        country,
        city,
        startDate,
        finishDate,
        number,
        src
    } = req.body
   
    try {
        const travelAddNewImage = await Travel.findById(id)
        const newImage = await Image.create({
            src,
            imgTravel: travelAddNewImage
        })
        const travel = await Travel.findByIdAndUpdate(id, {
            title,
            description,
            country,
            city,
            startDate,
            finishDate,
            number,
            images: [newImage],
            src: [src]
        })
        console.log(travel);
        res.status(200).json({ travel, newImage })
    }
    catch {
        res.status(404).json({ success: false, message: "Travel edit error" })
    }
})

router.delete('/travels', verToken, async function (req, res, next) {
    const { id } = req.body
    try {
        await User.findByIdAndUpdate(req.user.id, { $pull: { userTravels: id } })
        await Travel.findByIdAndDelete(id)
        res.status(200).json({ success: true, id })
    } catch {
        res.status(404).json({ message: 'Travel delete error' })
    }
})

export default router
