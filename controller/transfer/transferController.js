const Transfer = require("../../schemas/transfer");
const getTransferRssFeed = require("../../rss_json/transfer");
const transliteratePlayers = require("../../fetch/player_transliteration");

// Modified index function
const index = (req, res) => {
  try {
    const pageNumber = +parseInt(req.query.pageNumber);
    const pageSize = 3;

    // Fetch data in ascending order this time
    Transfer.find({})
      .sort({ createdAt: 1 }) // Ascending order
      // .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .then((response) => {
        // Process data to exclude the 2nd item from the end after reversing
        const processedResponse = response
          .filter((_, index) => index !== 1) // Skip the 2nd item (since we will reverse the array, it corresponds to the second-to-last item in original order)
          .reverse(); // Reverse to make it upside down

        res.status(200).json({
          response: processedResponse,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(502).json({
          message: "An error Occurred",
        });
      });
  } catch (e) {
    res.status(404).json({ message: "error" });
  }
};

module.exports = index;
