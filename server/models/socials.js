import mongoose from 'mongoose'

const socialSchema = new mongoose.Schema({
  facebook: { type: String },
  instagram: { type: String },
  gitHub: {type: String},
  twitter: {type: String},
})

export default mongoose.model('Social', socialSchema)
