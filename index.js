
require('dotenv').config()
require('./config/database')

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const sendMessage = require('./middleware/sendOTP')

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const morgan = require('morgan')
const cors = require('cors')



// send messate for just tests


// creating OTP


app.use(express.json())
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Ozean NFT MarketPlace',
            version: '1.0.0'
        },
        servers: [
            {
                url: `https://test-ozean-app.herokuapp.com:${PORT}/`
            }
        ]

    },
    apis : ['./routers/*.js']
}

const swaggerSpac = swaggerJsDoc(options)
// const bodyParser = require('body-parser')
app.use('/api-doc',swaggerUI.serve, swaggerUI.setup(swaggerSpac))



app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(cors())

// IMPORTING Routes
const profileRoute = require('./routers/profile')
const adminRegistration = require('./routers/adminRegistration')
const collectionRoutes = require('./routers/collections')
const nftRouter = require('./routers/NFTRoutes')
const viewAndLikes = require("./routers/likesAndFollow.js")
const IndexRouter = require('./routers/indexRoute')

// USE ROUTES AS GLOBARL MIDDLEWARE
app.use('/api', profileRoute)
app.use('/api', adminRegistration)
app.use('/api', collectionRoutes)
app.use('/api', nftRouter)
app.use('/api', viewAndLikes)
app.use(IndexRouter)


// express fiel uploads




// Routes that not found in this app
app.get('/', async (req, res) => {
    try {
        res.status(200).json({ msg: "Ozean backend is working successfully" })
    } catch (err) {
        res.status(500).json({ msg: "server error" })
    }
})



// listening app on this port number (this is server)
app.listen(PORT,"0.0.0.0", () => {
    console.log(`server started successfully on PORT Number ${process.env.PORT}`)
})