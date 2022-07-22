
const bcrypt = require('bcryptjs')

const pass = 'Boysun_1999'

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(pass, salt)

console.log(hash)