import mongoose from 'mongoose'

const travelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  startDate: { type: Date, required: true },
  finishDate: { type: Date, required: true },
  number: { type: Number, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
  }],
  scr: []
})

export default mongoose.model('Travel', travelSchema)
