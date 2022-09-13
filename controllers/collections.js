const models = require('../models/model')
const path = require('path')
const cloudinary = require('../config/cloudinary')



// create collection post method
const createCollection = async (req,res)=>{
    try {
               
        const ownerID = req.params.ownerID;
        
        // uploading images on cloudinary
        var profileImg = "";
        var backgroundImg = "";
        if(req.files[0]){
            profileImg = await cloudinary.v2.uploader.upload(req.files[0].path)
            profileImg = profileImg.secure_url
        }else{
            profileImg = 'https://res.cloudinary.com/learn2code/image/upload/v1663070003/download_2_ehimo5.png'
        }

        if(req.files[1]){
            backgroundImg = await cloudinary.v2.uploader.upload(req.files[1].path)
        }
        
        

        const newCollection = models.collectionModel({
            name : req.body.name,
            description : req.body.description,
            owner : ownerID,
            avatar : profileImg,
            background : backgroundImg.secure_url
        })

        // find if body.name is already exist in databse
        const user = await models.userModel.findOne({_id : ownerID})
        user.Collections.push(newCollection._id)
       
        //  saving user
        await user.save()

        // saving collection
        await newCollection.save()
        res.status(200).json({success : true, msg : "collection created successfully"})

    } catch (error) {
        
        res.status(500).json({success : false, msg : "something went wrong in server", error : error.message})  

    }
}














// making object of all functions
const collectionOBj = {
    createCollection : createCollection
}

// exporting functions
module.exports = collectionOBj