
require('dotenv').config()
require('./config/database')
const express = require('express')
const app = express()
const PORT = process.env.PORT
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require("express-fileupload");
const path = require('path')
const bodyParser = require('body-parser')


app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// Routes
const profileRoute = require('./routers/profile')

app.use('/api',profileRoute)

// express fiel upload
// app.use(fileUpload());


// listening app on this port number (this is server)
app.listen(PORT, ()=>{
    console.log(`server started successfully on PORT Number ${process.env.PORT}`)
})