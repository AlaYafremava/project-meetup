import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  surname: { type: String, required: true, trim: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  bday: { type: Date, required: true },
  phone: { type: Number },
  sex: { type: String, required: true },
  city: { type: String },
  profession: { type: String },
  regDate: { type: Date, default: Date.now() },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  languages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Language'
  }],
  socials: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Social'
  }],
  userTravels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Travel'
  }],
  pastTravels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Travel'
  }],
  futureTravels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Travel'
  }],
})

export default mongoose.model('User', userSchema)
