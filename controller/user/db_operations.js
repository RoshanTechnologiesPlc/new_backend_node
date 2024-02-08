const User = require('../../schemas/user_model')

async function getUserInformation(id){
    try{
        const user = await User.findOne({id})
        return user;
    }catch(e){
        false
        console.log(`Error in getUserInformation: ${e}`)
    }
}

async function updateUserImageUrl(id , imageUrl){
    try{
        const user = await User.findOneAndUpdate(
            {id} ,
            {imageUrl} ,
            {new : true , upsert : true} ,
            )
            // console.log(user)
            return user
    }catch(e){
        console.log(`Error in updateUserInfo: ${e}`)
        return null
    }
}


module.exports = {getUserInformation , updateUserImageUrl}