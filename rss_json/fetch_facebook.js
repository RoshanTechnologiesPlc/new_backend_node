const  facebookRssLinks = require('./face_book_rss/rss_links');
const { RSS_ONE, RSS_FIVE, RSS_FOUR, RSS_THREE, RSS_TWO ,  chelseaFaceBookRss,manCityFaceBookRss,liverPoolFaceBookRss,bleacherFaceBookRss,fabriozioFaceBookRss} = facebookRssLinks;
const getFaceBookRssFeed = require("./facebook")

// write a function that calls itself per 30 minutes
async function fetchFaceBookRssFeed() {
  try {
    fetchFaceBook()
    setTimeout(fetchFaceBook, 1800000);
  } catch (error) {
    console.error("Error fetching rss feed:", error);
  }
}


const facebookRssLinksList = [RSS_ONE, RSS_FIVE, RSS_FOUR, RSS_THREE, RSS_TWO ,  chelseaFaceBookRss,manCityFaceBookRss,liverPoolFaceBookRss,bleacherFaceBookRss,fabriozioFaceBookRss];
async function fetchFaceBook(){
    try {
        for (const rssLink of facebookRssLinksList) {
            await getFaceBookRssFeed(rssLink);
          }
      }catch(error){
        console.log(error);
      }
}


module.exports = fetchFaceBookRssFeed;