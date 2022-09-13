
require('dotenv').config()
require('./config/database')
const express = require('express')
const app = express()
const PORT = process.env.PORT
const morgan = require('morgan')
const cors = require('cors')

const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({extended : true}));

app.use(morgan('dev'))

app.use(cors())

// Routes
const profileRoute = require('./routers/profile')
const adminRegistration = require('./routers/adminRegistration')
const collectionRoutes = require('./routers/collections')


app.use('/api',profileRoute)
app.use('/api',adminRegistration)
app.use('/api',collectionRoutes)

// express fiel upload



// listening app on this port number (this is server)
app.listen(PORT, ()=>{
    console.log(`server started successfully on PORT Number ${process.env.PORT}`)
})