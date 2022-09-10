
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const morgan = require('morgan')


app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended : false}))



// 
app.get('/', async(req,res)=>{
    try {
        
        res.status(200).json({msg : "Ozean backend working successfully"})
    } catch (error) {

    }
})




app.listen(PORT, ()=>{
    console.log(`server started successfully on PORT Number ${process.env.PORT}`)
})