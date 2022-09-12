router = require('express').Router()



router.get('/', async (req,res)=>{

    res.status(200).json({msg : "Ozean backend is working successfully"})
    
})



module.exports = router