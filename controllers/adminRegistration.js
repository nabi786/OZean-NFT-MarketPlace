const modles = require('../models/model')
const jwt = require('jsonwebtoken')



// Admin Register
const adminRegister = async (req, res) => {
    try {

        const { walletAddress, name, email } = req.body

        if (!walletAddress || !name || !email) {
            res.status(200).json({ success: false, msg: "invalid parameters" })

        } else {

            const check = await modles.adminModel.findOne({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' } })

            if (!check) {
                // creating admin 
                const newAdmin = modles.adminModel({
                    walletAddress: walletAddress,
                    name: name,
                    email: email
                })

                // admin save here
                await newAdmin.save()

                // sending response
                res.status(200).json({ success: true, msg: "admin registered successfully" })

            } else {
                res.status(500).json({ success: false, msg: "with this walletAddress admin already exist" })
            }
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "something went wrong in server", error: error })
    }
}






// Update Admin
const updateAdmin = async (req, res) => {

    try {

        // checking if admin exist with this wallet address or not
        const check = await modles.adminModel.findOne({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' } })

        if (!check) {
            // if admin not so send this response
            res.status(200).json({ success: false, msg: "with this wallet address admin does nott exist" })
        } else {

            //  (if admin found)

            // updating admin here
            await modles.adminModel.findOneAndUpdate({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': "i" } }, {
                name: req.body.name,
                email: req.body.email
            })

            // sending success response
            res.status(200).json({ success: true, msg: "admin updated successfully" })
        }


    } catch (error) {
        res.status(500).json({ success: false, msg: "something went wrong in server" })
    }

}






// delete Admin
const deleteAdmin = async (req, res) => {
    try {

        const check = await modles.adminModel.findOne({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', "$options": 'i' } })

        if (!check) {

            res.status(200).json({ success: false, msg: "admin not found with this walletAddress" })
        } else {

            await modles.adminModel.findOneAndDelete({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', "$options": 'i' } })

            res.status(200).json({ success: true, msg: "admin deleted successfully" })
        }
    } catch (error) {
        res.status(500).json({ success: false, msg: "something went wrong in server" })
    }
}




// get all admins here  
const getAllAdmins = async (req, res) => {
    try {

        const allAdmin = await modles.adminModel.find({})

        // sending success response
        res.status(200).json({ success: true, data: allAdmin })


    } catch (error) {

        res.status(500).json({ success: false, msg: "something went wrong with server", error: error.message })
    }
}





// getSingleUser By WalletAddress
const getSingleAdmin = async (req, res) => {
    try {

        const address = req.params.walletAddress;
        const currentAdmin = await modles.adminModel.findOne({ walletAddress: { '$regex': '^' + address + '$', '$options': 'i' } })


        res.status(200).json({ success: true, data: currentAdmin })
    } catch (error) {
        res.status(500).json({ succeess: false, msg: "something went wrong in server" })
    }
}









// admin login () 
const adminLogin = async (req, res) => {
    
    try {
        if (req.body.walletAddress) {

            var adminData = await modles.adminModel.findOne({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' } })

            if (adminData) {
                // adding jsonweb Token
                const token = jwt.sign({ walletAddress: adminData.walletAddress }, process.env.secretKey, {
                    expiresIn: "12 hours"
                })
                res.status(200).json(token)

            } else {
                res.status(400).json({ msg: "wallet Not Found" })
            }
        } else {
            res.status(400).json({ msg: "wallet not found" })
        }


    } catch (error) {
        res.status(500).json({ success: false, msg: "something went wrong in server" })
    }
}










// object to export admin controllers
const adminObj = {
    adminRegister: adminRegister,
    updateAdmin: updateAdmin,
    deleteAdmin: deleteAdmin,
    getAllAdmins: getAllAdmins,
    getSingleAdmin: getSingleAdmin,
    adminLogin: adminLogin
}


module.exports = adminObj