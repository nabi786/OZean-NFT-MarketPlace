const mongoose = require('mongoose')


// user Schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "userName must be provided"]
    },
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    }
    , Avatar: {
        type: String,
    },

    background: {
        type: String,
    },
    description: {
        type: String
    },
    twitter: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String,
    },
    Followers: {
        Type: Array
    },
    Following: {
        type: Array
    },
    isVarified: {
        type: Boolean,
        default: false
    },
    isOnFeatured: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


const user = mongoose.model('user', userSchema)


// exporint models
const modles = {
    userModel: user
}


module.exports = modles