

// importing profile moddle
const models = require('../models/model')


// create profile
const createuser = async (req, res) => {
    try {
        const check = await models.userModel.find({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', "$options": "i" } })

        console.log(req.files)

        if (check != null && check != undefined && check.length != 0) {
            res.status(200).json({ success: false, msg: "wallet Address is already exist" })
        }
         
        if(check.length == 0) {
            // creating new profile
            const newProfile = models.userModel({
                userName: req.body.userName,
                walletAddress: req.body.walletAddress,
                description: req.body.background,
                twitter: req.body.twitter,
                facebook: req.body.facebook,
                instagram: req.body.instagram,
            })

            
            // await newProfile.save()
            res.status(200).json({ success: true, msg: "profile created successfully" })
        }
        

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "something went wrong in server" })
    }
}





// update profile
const updateProfile = async (req, res) => {
    try {

        const {body} = req

        // check if wallet address exist or not
        const profile = await models.userModel.findOne({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' } })

        

        if (profile != null) {
            

            await models.userModel.findOneAndUpdate({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' } },{...body})

            res.status(200).json({ success: true, msg: "updated successfully" })

        }else{

            res.status(200).json({ success: true, msg: "no profile found with this walled Address"})
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "something went wrong in server" })
    }
}










// object of all functions
const UserObj = {
    createuser: createuser,
    updateProfile: updateProfile
}


// exporting all function as an object
module.exports = UserObj