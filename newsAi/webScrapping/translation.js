const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
let key = "eba4e1717be1484bb82b063e31590abd";
let endpoint = "https://api.cognitive.microsofttranslator.com";


let location = "eastus";

async function translateText(from ,  text, to) {
    if (text == null || text == undefined || /^\s*$/.test(text)==true) {
        return {
            amharic : "" , 
            tigrigna : "",
            somali : ""
        }
    }
        
    
console.log(`received text to be translated ... ${text}`)
console.log(`${key}`)
 res = await  axios({
        baseURL: endpoint ,
        url: '/translate' ,
        method: 'post',                                   
        headers: {
            'Ocp-Apim-Subscription-Key': key,
             // location required if you're using a multi-service or regional (not global) resource.
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0', 
            'from': from,
            'to': to
        },
        data: [{
            'text': text 
        }],
        responseType: 'json'
    }).then(function(response){
        // console.log(response)
        console.log(`received response with status code of ${response.status}}`)
        // console.log(response.data[0]['translations'])
        if(response.status ==200){
            const translation = {
                amharic  : response.data[0]['translations'][0]['text'],
                tigrigna : response.data[0]['translations'][1]['text'],
                somali   : response.data[0]['translations'][2]['text']
             } 
    
           console.log("translation finished")
        console.log(JSON.stringify(translation))
            return translation
        }else{
            console.log('received error')
            console.log(`${response.status}}  -- --  - - - - ${response.data}`)
            return {
                amharic : false , 
                tigrigna :false ,
                somali : false
            }
        } 
      
    }).catch(function(error){
        console.log(`received error ${error}`)
      
        return {
            amharic : false , 
            tigrigna :false ,
            somali : false
        }
    })


    console.log(`res is ${res.data}`)
       return res
}






module.exports = translateText