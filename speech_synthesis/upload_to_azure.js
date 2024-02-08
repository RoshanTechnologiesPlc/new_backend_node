const { BlobServiceClient } = require("@azure/storage-blob");
const fs = require("fs").promises;

async function uploadToAzure(filePath) {
    require('dotenv').config()
    // console.log(process.env.AZURE_CONNECTION_STRING)
    // console.log(process.env.AZURE_CONTAINER_NAME)
  const connectionString ="DefaultEndpointsProtocol=https;AccountName=testanews;AccountKey=IFTfhlrPxzrfMyHLPm3mei4jlJwG0VMQWo0HCm2Wd8NK1cdHDu5vwfiP0LvTjLFXu90VAZFAGpwT+AStsXd2ag==;EndpointSuffix=core.windows.net"
  // process.env.AZURE_CONNECTION;
//    process.env.AZURE_CONNECTION_STRING;
  const containerName = "testanewsvoice"
  // process.env.AZURE_CONTAINER_NAME;
  const blobName = filePath.split("/").pop();

  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const fileBuffer = await fs.readFile(filePath);
    const uploadResponse = await blockBlobClient.upload(fileBuffer, fileBuffer.length);

    if (uploadResponse._response.status === 201) {
      console.log("Successfully uploaded to Azure:", filePath);

      // Delete the local file
      await fs.unlink(filePath);
      console.log("Successfully deleted local file:", filePath);

      return true;
    } else {
      console.log("Error uploading file:", uploadResponse._response.status, uploadResponse._response.bodyAsText);
      return false;
    }
  } catch (error) {
    console.log("Error uploading file:", error);
    return false;
  }
}

// // Usage
// uploadToAzure("mynewsId.wav").then((result) => {
//   if (result) {
//     console.log("Upload and deletion successful!");
//   } else {
//     console.log("Upload failed.");
//   }
// });




module.exports = uploadToAzure;