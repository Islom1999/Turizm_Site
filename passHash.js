
const bcrypt = require('bcryptjs')

const pass = ',vbdslfdssad'

const salt = bcrypt.genSaltSync(5);
const hash = bcrypt.hashSync(pass, salt)

console.log(hash)