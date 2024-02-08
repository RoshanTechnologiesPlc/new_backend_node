const mongoose = require("mongoose");
const newsContentSchema = new mongoose.Schema({
    h1title : {type : String , required : false} ,
    h2title : {type : String , required : false} ,
    h3title : {type : String , required : false} ,
    imageLink : {type : String, required : false} , 
    figCaption : {type  :String , required : false}, 
    paragraph : {type : String , required : false} ,
    description : {type : String , required : false} ,
    tableHead : [] ,
    tableBody :[] ,
    language : {type : String , required : false} ,
    newsLink : {type : String , required : false} ,
    commonId : {type : String , required : false} ,


   
});

module.exports = mongoose.model("newsContent", newsContentSchema);