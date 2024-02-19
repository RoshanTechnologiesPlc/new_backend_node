// const mongoose = require('mongoose');

// const TestaNews = require('./schemas/news_model');


// const url = 'mongodb+srv://abubekersiraj:Mongodbpassword1234@test.zezynu2.mongodb.net/?retryWrites=true&w=majority';



// mongoose.connect(url)
//   .then(() => {

//     addIsProcessedField();
// //    
//   })
//   .catch(err => {
//     console.error(`Error connecting to the database: ${err}`);
//   });

  
// async function addIsProcessedField() {

//     try {

//       const updateResult = await TestaNews.updateMany(
//         {}, 
//         { $set: { is_processed: true } } // Set `is_processed` to true for all matched documents
//       );
  
//       console.log(`Documents updated: ${updateResult.modifiedCount}`);
//     }catch(e){
//         console.log(e);
//     }
//   }
  
//   addIsProcessedField().catch(console.error);