import mongoose from "mongoose"
import Tag from './models/tags.js'

async function seed() {
  await mongoose.connect(`mongodb+srv://alex:alex123@meetup.4dhze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
   })

  const tags = [
    {
      title: 'vegan',
    check: false
    },
    {
      title: 'travel',
    check: false
    },
    {
      title: 'sport',
    check: false
    },
    {
      title: 'architecture',
    check: false
    },
    {
      title: 'video games',
    check: false
    },
    {
      title: 'rock music',
    check: false
    },
    {
      title: 'classic music',
    check: false
    },
    {
      title: 'IT',
    check: false
    },
    {
      title: 'running',
    check: false
    },
    {
      title: 'science',
    check: false
    },
  ]
  await Tag.insertMany(tags);
  await mongoose.connection.close();
}

// seed()
