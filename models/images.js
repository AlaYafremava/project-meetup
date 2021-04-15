import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema({
  src: { type: String, required: true },
  imgTravel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Travel'
  },
})

export default mongoose.model('Image', imageSchema)
