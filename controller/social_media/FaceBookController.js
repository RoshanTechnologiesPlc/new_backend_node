const FaceBook = require("../../schemas/facebook_model");
const getFaceBookRssFeed = require("../../rss_json/facebook");
// fetch all data
const index = (req, res) => {
    const pageNumber = req.query.pageNumber || 1;
    const itemsPerPage = req.query.itemsPerPage || 10;
    const skip = (+pageNumber - 1) * itemsPerPage;
console.log("pageNumber",pageNumber)
  FaceBook.find()
    .sort({ pubDate: -1 }).skip(skip).limit(itemsPerPage)
    .then((response) => {
      res.status(200).json({
        response,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error Occured",
      });
    });
};
// store new data to server
async function mainFaceBook() {
  try {
    const rssUrl =
      "http://fetchrss.com/rss/6561fb3580746912e74802d26572032b1d95834d31500702.xml";
    // Replace with your actual RSS feed URL
    const rssFeedData = await getFaceBookRssFeed(rssUrl);

    // Access and use the extracted data as needed
    for (const item of rssFeedData) {
      let faceBook = new FaceBook({
        title: item.title,
        link: item.link,
        description: item.description,
        pubDate: item.pubDate,
        creater: item.creater,
        mediaContent: item.mediaContent,
      });

      const data = await fetchDataByLink(item.link);
      if (data) {
        console.log(data);
      } else {
        faceBook
          .save()
          .then((response) => {
            console.log("FaceBook Rss Added Successfully");
          })
          .catch((error) => {
            console.log("An error Occured");
          });
      }
    }
  } catch (error) {
    console.error("Main function error:", error);
  }
}
// fetch data by link
async function fetchDataByLink(link) {
  try {
    // Fetch data by email
    const result = await FaceBook.findOne({ link });

    return result;
  } catch (error) {
    console.error("Error fetching data by email:", error);
  } finally {
  }
}

module.exports = {
  index,
  mainFaceBook,
};