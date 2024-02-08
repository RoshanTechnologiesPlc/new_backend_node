const translateText = require("./translation")


async function translation(){
    res = await translateText("en" , "hello" , "am")
    console.log(res)
}
translation()