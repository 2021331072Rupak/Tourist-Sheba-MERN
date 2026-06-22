import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Tour from './models/Tour.js'

dotenv.config()

const importTours = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Connected to MongoDB')

        // Import the tours data
        const toursData = [
  {
    "title": "Ratargul Swamp Forest,Sylhet",
    "city": "Sylhet",
    "address": "Gowainghat, Sylhet",
    "distance": 300,
    "price": 50,
    "maxGroupSize": 10,
    "desc": "this is the description",
    "reviews": [],
    "photo": "/tour-images/tour-img01.jpg",
    "featured": true
  },
  {
    "title": "Sadapathor, Sylhet",
    "city": "Sylhet",
    "address": "Bholagong in Sylhet",
    "distance": 300,
    "price": 60,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "reviews": [],
    "photo": "/tour-images/tour-img02.jpg",
    "featured": true
  },
  {
    "title": "Piyain River, Jaflong, Sylhet",
    "city": "Sylhet",
    "address": " Gowainghat, Sylhet",
    "distance": 300,
    "price": 80,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "reviews": [],
    "photo": "/tour-images/tour-img03.jpg",
    "featured": true
  },
  {
    "title": "Lalakhal, Sylhet",
    "city": "Sylhet",
    "address": "Jaintiapur, Sylhet",
    "distance": 300,
    "price": 70,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "reviews": [],
    "photo": "/tour-images/tour-img04.jpg",
    "featured": true
  },
  {
    "title": "Kaptai Lake, Chittagong",
    "city": "Chittagong",
    "address": " Kaptai,Rangamati, Chittagong",
    "distance": 400,
    "price": 120,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "reviews": [],
    "photo": "/tour-images/tour-img05.jpg",
    "featured": true
  },
  {
    "title": "Khoiyachara Waterfalls",
    "city": "Chittagong",
    "address": " Mirsharai, Chittagong,",
    "distance": 400,
    "price": 100,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "reviews": [],
    "photo": "/tour-images/tour-img06.jpg",
    "featured": true
  },
  {
    "title": "Sajek Valley, Rangamati",
    "city": "Chittagong",
    "address": "Baghaichhari,Rangamati",
    "distance": 400,
    "price": 140,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "reviews": [],
    "photo": "/tour-images/tour-img07.jpg",
    "featured": true
  },
  {
    "title": "Cox's Bazar Sea Beach",
    "city": "Chittagong",
    "address": "Cox's Bazar Sadar, Cox's Bazar",
    "distance": 400,
    "price": 150,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "reviews": [],
    "photo": "/tour-images/tour-img08.jpg",
    "featured": true
  }
        ]

        await Tour.deleteMany({})
        console.log('Cleared existing tours')

        const result = await Tour.insertMany(toursData)
        console.log(`${result.length} tours imported successfully!`)

        process.exit(0)
    } catch (err) {
        console.log('Error importing tours:', err)
        process.exit(1)
    }
}

importTours()
