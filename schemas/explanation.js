const mongoose = require("mongoose");
const newsContentSchema = require(__dirname +'/newsContentSchema.js').schema;;
 
const newsSchema = new mongoose.Schema({
  author: { type: String, required: true },
  sourceLink: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  // description, if there are multiple lines of descriptions, they should be separated by a new line character (\n) 
//   and given as a single string.
  mainImage: { type: String, required: true },
  figCaption : {type  :String , required : false},
  headLineTextAfterImage :  {type : String , default : null , required : false} , 
  publishedDate: { type: String },
  id: { type: String, required: true },
  listOfContent : [newsContentSchema] ,
  language : {type : String ,  required : true} , 
  commonId : {type : String , default : null , required : false} , 
  newsLink : {type : String , default : null , required : false} , 


  translated: { type: Boolean, default: false },
//   untranslatedFields: [{ type: String }] ,  not required
  pending : {type : Boolean , default : true ,required :  false} ,
}, { timestamps: true }); 

module.exports = mongoose.model("news", newsSchema);
  

// and the below is for newsContentSchema : 


const mongoose = require("mongoose");
// const
newsContentSchema = new mongoose.Schema({
    h1title : {type : String , required : false} ,
    h2title : {type : String , required : false} ,
    h3title : {type : String , required : false} ,
    imageLink : {type : String, required : false} , 
    figCaption : {type  :String , required : false}, 
    paragraph : {type : String , required : false} ,
    description : {type : String , required : false} ,
      // description, if there are multiple lines of descriptions, they should be separated by a new line character (\n) 
//   and given as a single string.
    tableHead : [] ,
    tableBody :[] ,
    language : {type : String , required : false} ,
    newsLink : {type : String , required : false} ,
    commonId : {type : String , required : false} ,


   
});

module.exports = mongoose.model("newsContent", newsContentSchema);