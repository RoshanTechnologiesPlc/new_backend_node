const ChannelId=require('../schemas/channelId')
const Highlight=require('../schemas/youtubehighlight')
const { response } = require('express')
const index=async(req,res)=>{
    const{fixtureId}=req.params
    Highlight.findOne({fixtureId}).then((response)=>{
        res.status(200).json(response)
    }).catch((error)=>{
        res.json({"message":error})
    })
}

const fetch=async(req,res)=>{
    const{fixtureId}=req.params
    Highlight.find().sort({fixtureId:-1}).then((response)=>{
        res.json({response})
    }).catch((error)=>{
        res.json({"message":error})
    })
}
module.exports={index}