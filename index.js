const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const env = require('dotenv')
const connectDB = require('./config/configDb')

const app = express()

env.config() 

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');  

app.get('/', (req, res) => {
    res.redirect('/uz')
})

app.use('/uz', require('./routes/pagesUz'))
app.use('/admin', require('./routes/adminRoutes'))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => { 
    console.log(PORT)
})