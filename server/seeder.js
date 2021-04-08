import mongoose from "mongoose"
// import Img from './models/img.js'

async function seed() {
  await mongoose.connect('mongodb://localhost:27017/meetup', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  // const imgs = [
  //   {
  //     src: 'http://c.files.bbci.co.uk/CD5E/production/_109447525_catsmaincoonunfriendly.jpg',
  //   },
  //   {
  //     src: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/42E2/production/_96522171_gettyimages-450864271.jpg',
  //   },
  //   {
  //     src: 'https://habrastorage.org/webt/0f/h4/nr/0fh4nrc5alhzwwns40cej0duwec.jpeg',
  //   },
  // ]
  // await Img.insertMany(imgs);
  // await mongoose.connection.close();
}

// seed()
