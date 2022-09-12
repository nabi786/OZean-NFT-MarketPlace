
require('dotenv').config()
require('./config/database')
const express = require('express')
const app = express()
const PORT = process.env.PORT
const morgan = require('morgan')


app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended : false}))



// Routes
const indexRouter = require('./routers/indexRoute')

// middlewares
app.use(indexRouter)





app.listen(PORT, ()=>{
    console.log(`server started successfully on PORT Number ${process.env.PORT}`)
})