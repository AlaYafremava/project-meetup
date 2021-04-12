import Router from "express"
const router = new Router()
import User from "../models/users.js"
import Travel from "../models/travels.js"
import verToken from "../middlware/auth.js"
import path from "path"
import multer from 'multer'

// const storage = multer.diskStorage({
//     destination: 'upload/images',
//     filename: function (req, file, cb) {
//       cb(null, path.join(Date.now() + '-' + file.originalname.replace(/\.jpg/, '')))
//     }
//   })
//   const fileFilter = (req, file, cb) => {
    
//     if(file.mimetype === "image/png" || 
//     file.mimetype === "image/jpg"|| 
//     file.mimetype === "image/jpeg"){
//         cb(null, true);
//     }
//     else{
//         cb(null, false);
//     }
//   }
// const upload = multer({ storage:storage, fileFilter:fileFilter })

// router.post('/upload', upload.single('photo'), async (req,res) => {
//     console.log(req.file)
//     })



router.get("/travels", verToken, (async (req, res) => {
    try {
        const travels = await Travel.find()
        if (!travels) {
            return res.status(400).json({
                message: "Travels not found"
            })
        }
        return res.status(200).json({ travels, success: true })
    } catch (e) {
        res.status(400).json({ message: "travels load error" })
    }
})
)


router.post('/travels/new', verToken, async (req, res) => {
    try {
      const { title, description, country, city, startDate, finishDate, number } = req.body
      // console.log(country, startDate)
      const newTravel = await Travel.create({
        title,
        description,
        country,
        city,
        startDate,
        finishDate,
        number,
        owner: req.user.id,
      })
      console.log(newTravel);
      const createrNewTravel = await User.findByIdAndUpdate(req.user.id, {userTravels: [newTravel._id]})
      console.log(createrNewTravel);
      if (newTravel) {
          return res.status(200).json({ newTravel, success: true })
        }
    } catch (e) {
      res.status(400).json({ message: 'travel create error' })
    }
  })

router.get("/travels/:id", (async (req, res) => {
    const { id } = req.params
    try {
        const travel = await Travel.findOne({_id:id})
        console.log(travel);
        if (!travel) {
            return res.status(400).json({
                message: "Travels not found"
            })
        }
        return res.status(200).json({ travel, success: true })
    } catch (e) {
        res.status(400).json({ message: "travels load error" })
    }
})
)

// router.put("/travels/:id", async function (req, res, next) {
//     const { id } = req.params
//     const {
//         title,
//         description,
//         country,
//         city,
//         startDate,
//         finishDate, 
//         number
//     } = req.body
//     try {
//         const travel = await Travel.findOneAndUpdate({ _id: id }, {
//             title,
//             description,
//             country,
//             city,
//             startDate,
//             finishDate,
//             owner,
//             followers,
//             images
//         })
//         res.status(200).json({ success: true, travel })
//     }
//     catch {
//         res.status(404).json({ success: false, message: "travel edit error" })
//     }
// })

router.delete("/travels", async function (req, res, next) {
    const { id } = req.body
    // console.log(id);
    try {
        await Travel.findByIdAndDelete(id)
        res.status(200).json({ success: true, id })
    }
    catch {
        res.status(404).json({ message: "travel delete error" })
    }
})


export default router