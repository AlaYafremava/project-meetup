import mongoose from 'mongoose'

const languageSchema = new mongoose.Schema({
  english: { type: Boolean, default: false },
  russian: { type: Boolean, default: false },
  spain: { type: Boolean, default: false },
  chinese: { type: Boolean, default: false },
  france: { type: Boolean, default: false },
  italian: { type: Boolean, default: false },
  german: { type: Boolean, default: false },
  japan: { type: Boolean, default: false },
})

export default mongoose.model('Language', languageSchema)
