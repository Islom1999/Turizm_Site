const {v4} = require('uuid')
const ServicesUZ = require('../../model/uz/ServicesModel')
const ServicesENG = require('../../model/eng/ServicesModel')
const ServicesRU = require('../../model/ru/ServicesModel')

const addServices = async(req,res) => {
    try{
        const ServicesDBUZ = await ServicesUZ.find().lean()
        const id = v4()
        let isLeft = false
        if(ServicesDBUZ[ServicesUZ.length - 1]){
            isLeft = true
        }

        ServicesUZ.create({
            id,
            img: '/upload/img/' + req.file.filename,
            title: req.body.titleUZ,
            isLeft,
            cost: [
                {
                    content: req.body.costuz1,
                    amount: req.body.amount1, 
                },
                {
                    content: req.body.costuz2,
                    amount: req.body.amount2, 
                },
                {
                    content: req.body.costuz3,
                    amount: req.body.amount3, 
                },
                {
                    content: req.body.costuz4,
                    amount: req.body.amount4, 
                }
            ]
        })

        ServicesENG.create({
            id,
            img: '/upload/img/' + req.file.filename,
            title: req.body.titleENG,
            isLeft,
            cost: [
                {
                    content: req.body.costeng1,
                    amount: req.body.amount1, 
                },
                {
                    content: req.body.costeng2,
                    amount: req.body.amount2, 
                },
                {
                    content: req.body.costeng3,
                    amount: req.body.amount3, 
                },
                {
                    content: req.body.costeng4,
                    amount: req.body.amount4, 
                }
            ]
        })

        ServicesRU.create({
            id,
            img: '/upload/img/' + req.file.filename,
            title: req.body.titleRU,
            isLeft,
            cost: [
                {
                    content: req.body.costru1,
                    amount: req.body.amount1, 
                },
                {
                    content: req.body.costru2,
                    amount: req.body.amount2, 
                },
                {
                    content: req.body.costru3,
                    amount: req.body.amount3, 
                },
                {
                    content: req.body.costru4,
                    amount: req.body.amount4, 
                }
            ]
        })

        console.log(req.body)

        res.redirect('/admin/services')
    }
    catch(err){
        res.redirect('/admin/services')
        console.log(err)
    }
}

const removeServices = async(req,res) => {
    try{ 
        id = req.params.id
        await ServicesUZ.find({id}).deleteOne()
        await ServicesENG.find({id}).deleteOne()
        await ServicesRU.find({id}).deleteOne()

        const ServiseDbUz= await ServicesUZ.find({}).lean()
        const ServiseDbEng= await ServicesENG.find({}).lean()
        const ServiseDbRu= await ServicesRU.find({}).lean()

        ServiseDbUz.forEach( async(elem, index) => {
            if(index % 2 == 0){
                elem.isLeft = true
                ServiseDbEng[index].isleft = true
                ServiseDbRu[index].isleft = true

                await ServicesUZ.findByIdAndUpdate(elem._id, elem)
                await ServicesENG.findByIdAndUpdate(ServiseDbEng[index]._id, ServiseDbEng[index])
                await ServicesRU.findByIdAndUpdate(ServiseDbRu[index]._id, ServiseDbRu[index])
            }else{
                elem.isLeft = false
                ServiseDbEng[index].isleft = false
                ServiseDbRu[index].isleft = false

                await ServicesUZ.findByIdAndUpdate(elem._id, elem)
                await ServicesENG.findByIdAndUpdate(ServiseDbEng[index]._id, ServiseDbEng[index])
                await ServicesRU.findByIdAndUpdate(ServiseDbRu[index]._id, ServiseDbRu[index])
            }
        })

        res.redirect('/admin/services') 
    }
    catch(err){
        console.log(err) 
        res.redirect(`/admin/services/${id}`)
    }
}

module.exports = {
    addServices,
    removeServices
}