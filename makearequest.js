// // const NewsAPI = require('newsapi');
// const uuid = require("uuid");
// const news = require("./news_model");
// const translateText = require("./translate");
// // const newsapi = new NewsAPI('e3cc4252264749dfba78dc4a8b3473f1');
// const axios = require("axios");

// // async function makeRequest(){

// //         try {

// //         const response = await axios.get('http://api.mediastack.com/v1/news', {
// //      params: {
// //       access_key: '38642f529a9b6811b9249f7b46e88dca',
// //       categories: 'sports'
// //     }
// //   });

// // console.log("000000000000000000000000000000")
// //   const newsData = response.data.data;

// // console.log(newsData)
// //   newsData.forEach(async article => {
// //     newsObject = {}
// //     console.log(article['published_at'])
// //     console.log(article[ 'title'])

// //     newsObject['author']=  await translateText(article['author'] ? article['author'] : "  " , "am" )
// //     newsObject['title'] = await translateText(article[ 'title'] ,  "am")
// //     newsObject['description'] = await translateText(article['description'] ,  "am")
// //   //   newsObject['content'] = await translateText(content, "am")

// //       newsObject['id'] = uuid.v4()
// //     newsObject['image'] = article['image']
// //     newsObject['date'] = article['published_at']
// //     title = newsObject['title']
// //     await news.findOneAndUpdate(
// //         {title : title} , newsObject , {upsert : true}
// //       )
// //   });
// //         } catch (error) {
// //              console.log(error)
// //         }

// // }

// async function makeRequest() {
//   try {
//     const response = await axios.get("http://api.mediastack.com/v1/news", {
//       params: {
//         access_key: "38642f529a9b6811b9249f7b46e88dca",
//         categories: "sports",
//       },
//     });

//     const newsData = response.data.data;

//     for (const article of newsData) {
//       const newsObject = {};
//       console.log(article["published_at"]);
//       console.log(article["title"]);

//       newsObject["author"] = await translateText(
//         article["author"] ? article["author"] : "  ",
//         "am"
//       );
//       newsObject["title"] = await translateText(article["title"], "am");
//       newsObject["description"] = await translateText(
//         article["description"],
//         "am"
//       );

//       newsObject["id"] = uuid.v4();
//       newsObject["image"] = article["image"];
//       newsObject["date"] = article["published_at"];
//       const title = newsObject["title"];
//       await news.findOneAndUpdate({ title: title }, newsObject, {
//         upsert: true,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   } 
// }

// module.exports = makeRequest;
