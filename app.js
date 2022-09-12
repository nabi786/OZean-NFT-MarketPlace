
require('dotenv').config()
require('./config/database')
const express = require('express')
const app = express()
const PORT = process.env.PORT
const morgan = require('morgan')
const cors = require('cors')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())

// Routes
const indexRouter = require('./routers/indexRoute')

// middlewares
app.use(indexRouter)






// listening app on this port number (this is server)
app.listen(PORT, ()=>{
    console.log(`server started successfully on PORT Number ${process.env.PORT}`)
})