const mongoose = require("mongoose")
const teamDataSchema = new mongoose.Schema(
    {
        id: {type : Number , required : true},              
        AmharicName :{ type :  String , required  : true}, 
        EnglishName :{ type :  String , required  : true}, 
        OromoName :{ type :  String , required  : true}, 
        SomaliName :{ type :  String , required  : true}, 
        translated : {
          type: Boolean,
          default: true
        },
        logo  : String ,
        amharicEditted : {type :  Boolean , required  : false  , default : null}, 
        somaliEditted : {type :  Boolean , required  : false  , default : null}, 
        oromoEditted : {type :  Boolean , required  : false  , default : null}
        
      }
);
module.exports  =  mongoose.model("TeamDataSchema" , teamDataSchema )