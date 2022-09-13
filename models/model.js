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
        type: Array
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
    },
    Collections : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "collections"
    }]
}, { timestamps: true })









// admin Registration
const adminSchema = mongoose.Schema({

    walletAddress: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        require: true
    }

}, { timestamps: true })








// create collection Schema
const collectionSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
      
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    },
    avatar : {
        type : String,
    },
    background : {
        type : String,
    },
    description : {
        type : String
    }
},{ timestamps: true })









// user Schema 
const user = mongoose.model('user', userSchema)

// admin Schema
const admin = mongoose.model('admin', adminSchema)


// collection model
const collection = mongoose.model('collections', collectionSchema)


// exporint models
const modles = {
    userModel: user,
    adminModel: admin,
    collectionModel : collection
}


// exporting model
module.exports = modles