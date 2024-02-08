var path = require("path");
const uploadToAzure = require("./upload_to_azure");
async function AmharicSynthesis(synthesisText , newsId){
    "use strict";
    require('dotenv').config()
    // console.log(process.env)
  // Define the custom folder path 
const customFolderPath = "./speech_synthesis/audio_files/";

// Concatenate the custom folder path with the audio file name
// var audioFile = path.join(customFolderPath, `${newsId}neew.mp3`);
// var audioFile = path.join(customFolderPath, `${newsId}.wav`);


    var sdk = require("microsoft-cognitiveservices-speech-sdk");
    // var audioFile = `${newsId}.mp3`;
    const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(path.join(`${newsId}.wav`));
    speechConfig.speechSynthesisVoiceName = "am-ET-AmehaNeural"; 
    var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Raw8Khz16BitMonoPcm  
    // var rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // }); 
 
    // rl.question("enter the news", function (text) {
    //   rl.close();
      // Start the synthesizer and wait for a result.
      synthesizer.speakTextAsync(synthesisText,
          function (result) {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          console.log(`synthesis finished through azure synthesis.`);
          synthesizer.close(); 
          synthesizer = null;

          
          uploadToAzure(`${newsId}.wav`).then((result) => {
            if (result) {
              console.log(`Upload and deletion successful! ${newsId}`);
              return true
            } else {

              console.log("Upload failed.");
              return false
            }
          });




          return true;
        } else {
          console.error("Speech synthesis canceled, " + result.errorDetails );
          synthesizer.close();
          synthesizer = null;
          return false;
        }
       
      },
          function (err) {
        console.trace("err - " + err);
        synthesizer.close();
        synthesizer = null;
        return false;
      });
      // console.log("Now synthesizing to: " + audioFile);

};

// AmharicSynthesis("የኢትዮጵያ አገራት ስለ አዲስ አበባ የተደረገው የአስቸኳይ ጊዜ የሚያደርግ አስቸኳይ ጊዜ ነው። የአስቸኳይ ጊዜ በአዲስ አበባ የተደረገው የአስቸኳይ ጊዜ የሚያደርግ አስቸኳይ ጊዜ ነው። የአስቸኳይ ጊዜ በአዲስ አበባ የተደረገው የአስቸኳይ ጊዜ የሚያደርግ አስቸኳይ ጊዜ ነው። የአስቸኳይ ጊዜ በአዲስ አበባ የተደረገው የአስቸኳይ ጊ" , "mynewsId")
module.exports = AmharicSynthesis;