const User = require('../../schemas/user_model')
async function registerUser(phoneNumber, name){
    const newUser = {
        phoneNumber : phoneNumber , 
        name : name , 
        devices : [] , 
        favouritePlayers : [] , 
        favouriteTeams : [] , 
        favouriteLeagues : [] ,
        favouriteMatches : []   , 
        paymentExpiryDate : null ,
        freetrial :  false }
    try{
        await User.create(newUser)
        console.log(`user with phone number ${phoneNumber} is created`)
        return true
    }catch(e){
        console.log(`error is caught ${e}`)
        return false
    }
}  


async function updateUserData(phoneNumber, userId , name){
    try{

        const currentUser = await User.findOne({id : userId})
        const exisingUser = await User.findOne({phoneNumber : phoneNumber})



        if(!exisingUser){
   res =      await User.findOneAndUpdate({id : userId} , {
            id : phoneNumber ,
            phoneNumber : phoneNumber , 
            name : name
          } , {
            upsert : true , 
            new  : true
          })
        }else{
            const imageUrl = exisingUser.imageUrl

            const existingFavouritePlayers = exisingUser.favouritePlayers
            const existingFavouriteTeams = exisingUser.favouriteTeams
            const existingFavouriteLeagues = exisingUser.favouriteLeagues
            const existingFavouriteMatches = exisingUser.favouriteMatches


            const currentFavouritePlayers = currentUser.favouritePlayers
            const currentFavouriteTeams = currentUser.favouriteTeams
            const currentFavouriteLeagues = currentUser.favouriteLeagues

            const currentFavouriteMatches = currentUser.favouriteMatches

            const favouritePlayers = [...existingFavouritePlayers , ...currentFavouritePlayers]
            const favouriteTeams = [...existingFavouriteTeams , ...currentFavouriteTeams]
            const favouriteLeagues = [...existingFavouriteLeagues , ...currentFavouriteLeagues]
            const favouriteMatches = [...existingFavouriteMatches , ...currentFavouriteMatches]



         res=    await User.findOneAndUpdate({phoneNumber : phoneNumber} , {
                id : phoneNumber ,
                phoneNumber : phoneNumber , 
                name : name , 
                imageUrl : imageUrl , 


                favouritePlayers :  favouritePlayers , 
                favouriteTeams : favouriteTeams  , 
                favouriteLeagues : favouriteLeagues,
                favouriteMatches : favouriteMatches  , 
              
            } , {
                upsert : true , 
                new  : true
              
            })
        }

        console.log(res)
      return true
    }catch(e){
        console.log(`error is caught ${e}`)
        return false
    }
} 
module.exports = {registerUser , updateUserData}