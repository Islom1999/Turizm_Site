const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const Pages = require('./model/PagesModelUZ')
const Place = require('./model/PlaceModelUZ')
const Hotel = require('./model/HotelModelUZ')
const Services = require('./model/ServicesModelUZ')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
})

const PagesDB = JSON.parse(fs.readFileSync(`${__dirname}/_data/pagesUZ.json`), 'utf-8')
const PlaceDB = JSON.parse(fs.readFileSync(`${__dirname}/_data/placeUZ.json`), 'utf-8')
const HotelDB = JSON.parse(fs.readFileSync(`${__dirname}/_data/hotelUZ.json`), 'utf-8')
const ServicesDB = JSON.parse(fs.readFileSync(`${__dirname}/_data/servicesUZ.json`), 'utf-8')

const importData = async() => {
    try{
        await Pages.create(PagesDB)
        await Place.create(PlaceDB)
        await Hotel.create(HotelDB)
        await Services.create(ServicesDB)

        console.log('Data imported DB ...')
        process.exit()
    }catch(err){
        console.log(err)
    }
}

const deleteData = async () => {
    try{
        await Pages.deleteMany()
        await Place.deleteMany()
        await Hotel.deleteMany()
        await Services.deleteMany()

        console.log('Data deleted ...')
    }catch(err){
        
        console.log(err)
    }
}

// run function: node seeder -i
if(process.argv[2] == '-i'){
    importData()
}// run function: node seeder -d
else if(process.argv[2] == '-d'){
    deleteData()
}
