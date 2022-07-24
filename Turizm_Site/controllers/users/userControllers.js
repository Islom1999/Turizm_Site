const Users = require('../../model/users')

const registerUser = async(req,res) => {
    try{
        const { fullName, userName, email, phone, pass, passRepeat} = req.body

        console.log(req.body)

        if(pass == passRepeat){
            await Users.create({ 
                fullName,
                userName,
                email,
                phone,
                password: pass,
            })
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    registerUser
}