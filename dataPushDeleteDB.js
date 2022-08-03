const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { v4 } = require('uuid')

dotenv.config()

// User Page DATA 
const UserPage = require('./model/UserPage')

// UZBEK DATA MODEL
const PagesUZ = require('./model/uz/PagesModel')
const PlaceUZ = require('./model/uz/PlaceModel')
const HotelUZ = require('./model/uz/HotelModel')
const ServicesUZ = require('./model/uz/ServicesModel')

// ENG DATA MODEL
const PagesENG = require('./model/eng/PagesModel')
const PlaceENG = require('./model/eng/PlaceModel')
const HotelENG = require('./model/eng/HotelModel')
const ServicesENG = require('./model/eng/ServicesModel')

// RU DATA MODEL
const PagesRU = require('./model/ru/PagesModel')
const PlaceRU = require('./model/ru/PlaceModel')
const HotelRU = require('./model/ru/HotelModel')
const ServicesRU = require('./model/ru/ServicesModel')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
})

// User Page DB Json
const UserPageDB = JSON.parse(fs.readFileSync(`${__dirname}/_data/userPage.json`), 'utf-8')

// UZ DATA JSON 
const PagesDB_UZ = JSON.parse(fs.readFileSync(`${__dirname}/_data/uz/pages.json`), 'utf-8')
const PlaceDB_UZ = JSON.parse(fs.readFileSync(`${__dirname}/_data/uz/place.json`), 'utf-8')
const HotelDB_UZ = JSON.parse(fs.readFileSync(`${__dirname}/_data/uz/hotel.json`), 'utf-8')
const ServicesDB_UZ = JSON.parse(fs.readFileSync(`${__dirname}/_data/uz/services.json`), 'utf-8')

// ENG DATA JSON 
const PagesDB_ENG = JSON.parse(fs.readFileSync(`${__dirname}/_data/eng/pages.json`), 'utf-8')
const PlaceDB_ENG = JSON.parse(fs.readFileSync(`${__dirname}/_data/eng/place.json`), 'utf-8')
const HotelDB_ENG = JSON.parse(fs.readFileSync(`${__dirname}/_data/eng/hotel.json`), 'utf-8')
const ServicesDB_ENG = JSON.parse(fs.readFileSync(`${__dirname}/_data/eng/services.json`), 'utf-8')

// RUS DATA JSON 
const PagesDB_RU = JSON.parse(fs.readFileSync(`${__dirname}/_data/ru/pages.json`), 'utf-8')
const PlaceDB_RU = JSON.parse(fs.readFileSync(`${__dirname}/_data/ru/place.json`), 'utf-8')
const HotelDB_RU = JSON.parse(fs.readFileSync(`${__dirname}/_data/ru/hotel.json`), 'utf-8')
const ServicesDB_RU = JSON.parse(fs.readFileSync(`${__dirname}/_data/ru/services.json`), 'utf-8')

ServicesDB_UZ.forEach( (elem, index) => {
    let id = v4()
    elem.id = id
    ServicesDB_ENG[index].id = id
    ServicesDB_RU[index].id = id
})

PlaceDB_UZ .forEach( (elem, index) => {
    let id = v4()
    elem.id = id
    PlaceDB_ENG[index].id = id
    PlaceDB_RU[index].id = id
})

HotelDB_UZ .forEach( (elem, index) => {
    let id = v4()
    elem.id = id
    HotelDB_ENG[index].id = id
    HotelDB_RU[index].id = id
})

const importData = async() => {
    try{

        await UserPage.create(UserPageDB)

        // UZ DATA ADD MONGO DB
        await PagesUZ.create(PagesDB_UZ)
        await PlaceUZ.create(PlaceDB_UZ)
        await HotelUZ.create(HotelDB_UZ)
        await ServicesUZ.create(ServicesDB_UZ)

        // ENG DATA ADD MONGO DB
        await PagesENG.create(PagesDB_ENG)
        await PlaceENG.create(PlaceDB_ENG)
        await HotelENG.create(HotelDB_ENG)
        await ServicesENG.create(ServicesDB_ENG)

        // RUS DATA ADD MONGO DB
        await PagesRU.create(PagesDB_RU)
        await PlaceRU.create(PlaceDB_RU)
        await HotelRU.create(HotelDB_RU)
        await ServicesRU.create(ServicesDB_RU)

        console.log('Data imported DB ...')
        process.exit()
    }catch(err){
        console.log(err)
    }
}

const deleteData = async () => {
    try{

        await UserPage.deleteMany()

        // UZ DATA REMOVE
        await PagesUZ.deleteMany()
        await PlaceUZ.deleteMany()
        await HotelUZ.deleteMany()
        await ServicesUZ.deleteMany()

        // ENG DATA REMOVE
        await PagesENG.deleteMany()
        await PlaceENG.deleteMany()
        await HotelENG.deleteMany()
        await ServicesENG.deleteMany()

        // RU DATA REMOVE
        await PagesRU.deleteMany()
        await PlaceRU.deleteMany()
        await HotelRU.deleteMany()
        await ServicesRU.deleteMany()

        console.log('Data deleted ...')
    }catch(err){
        
        console.log(err)
    }
}

// run function: node dataPushDeleteDB -i
if(process.argv[2] == '-i'){
    importData()
}// run function: node dataPushDeleteDB -d
else if(process.argv[2] == '-d'){
    deleteData()
}
