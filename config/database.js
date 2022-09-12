const mongoose = require('mongoose')


mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('database connected successfully')
}).catch(()=>{
    console.log('database not connected')
})