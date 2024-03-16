const Transfer = require("../../schemas/transfer");

// This version reverses the sort order of the documents.
const index = (req, res) => {
  const handleError = (error, message = "An error occurred") => {
    console.log(error);
    res.status(502).json({ message });
  };

  const sendResponse = (response) => {
    res.status(200).json({ response });
  };

  try {
    const pageSize = 3; // Controls the number of documents returned

    Transfer.find({})
      .sort({ createdAt: 1 }) // Sorts documents by creation time in ascending order
      .limit(pageSize) // Limits the number of documents to pageSize
      .then(sendResponse) // Sends the retrieved documents as a response
      .catch((error) => handleError(error, "An error Occurred"));
  } catch (error) {
    handleError(error, "Invalid request");
  }
};

module.exports = index;
