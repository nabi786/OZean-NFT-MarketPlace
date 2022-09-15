const models = require('../models/model')



// add Likes
const addLikes = async (req,res)=>{
        try{

            var currentUser = await models.userModel.findOne({walletAddress : {'$regex' : '^'+req.body.walletAddress+'$', '$options' : 'i'}})

            var currentNft = await models.nfts.findOne({tokenID : req.body.tokenID})
           
            var findIndex = currentNft.LikedBy.indexOf(currentUser._id)
            
            if(findIndex == -1){

                currentNft.LikedBy.push(currentUser._id)

                currentNft.Likes = currentNft.LikedBy.length
                
                currentNft.save()

                
                res.status(200).json({success : true, msg: "like added successfully"})

                

            }else{
                
                currentNft.LikedBy.splice(findIndex,1)
                currentNft.Likes = currentNft.LikedBy.length
                currentNft.save()
                res.status(200).json({success : true, msg: "like removed successfully"})
            }

        }catch{
            res.status(500).json({success : false, msg : "server error"})
        }
}











// making object of all functions
const likeObj = {
    addLikes : addLikes
}


// exporting that object
module.exports = likeObj