const express = require('express')
const app = express()
const router = require('./routes/index.js')
const methodOverride = require('method-override')
const logger=require('morgan')

app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public')); 


app.use(methodOverride('_method'))
app.use(logger('devn'))


app.use('/', router)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
 console.log(`Server is listening on PORT: ${PORT}`)
})