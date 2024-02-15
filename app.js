const app = require("./appp");
const port = process.env.PORT || 3001;
const socketIO = require("socket.io")
const userSockets = require("./socket/userSocket")
const mongoose = require("mongoose");
const initializeAgenda = require('./scheduling/initialize_agenda')

const verifyUserAccessTokenAndReturnId = require("./middleware/return_id_from_access_token")
const http = require("http")
const { seasonsFor2023, seasonsFor2022, seasonsForWorldCup } = require("./constants/availableSeasons")
// const { insertSeasons } = require("./functions/insert_seasons")
const notifyUserIfFavoritePodcastIsLive = require('./socket/podcast_notifier')
const getTransferRssFeed = require("./rss_json/transfer")
// const fetchFaceBookRssFeed = require("./rss_json/fetch_facebook")
const initializeFunctions = require("./functions/initialization_functions/initialize_functions")
const fetchAndStoreSummary = require("./newsAi/webScrapping/news_logic")
const MONGO_URL = 'mongodb+srv://abubekersiraj:Mongodbpassword1234@test.zezynu2.mongodb.net/?retryWrites=true&w=majority';
//  mongoose.connect(MONGO_URL);
// test functions 
const fetchTwitter = require("./fetch/social_media/fetch_twitter_feed")
const fetchInstagram = require("./fetch/social_media/fetch_instagram")

require("dotenv").config();

const server = http.createServer(app)

const io = socketIO(server)

io.on('connection', (socket) => {
  console.log('A new user connected.');

  // Handle user registration with accessToken
  socket.on('registerUser', async (accessToken) => {
    try {

      const userId = await verifyUserAccessTokenAndReturnId(accessToken);

      if (userId) {

        userSockets.set(userId, socket.id);
        notifyUserIfFavoritePodcastIsLive(userId, socket)

      }
    } catch (error) {
      console.error('Error verifying access token:', error);
    }
  });

  // Handle disconnection 
  socket.on('disconnect', () => {
    userSockets.forEach((value, key) => {
      if (value === socket.id) {
        userSockets.delete(key);
        console.log(`User ${key} disconnected and removed from mapping.`);
      }
    });
  });
});


const oneMinute = 1000 * 60
const oneHour = oneMinute * 60
const oneDay = oneHour * 24

// mongoose.set("strictQuery", true);
// mongoose.connection.once("open", () => {
//   console.log("mongoDB connection ready!");
//   setInterval(fetchAndStoreSummary, 600000); 
// });

// mongoose.connection.on("error", (error) => {
//   console.error(error);
// });


mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connected to the MongoDB database.');
    // fetchAndStoreSummary();
    // setInterval(fetchAndStoreSummary, 600000); 
  })
  .catch(err => {
    console.error(`Error connecting to the database: ${err}`);
  });

async function startServer() {

 
  // await fetchInstagram("https://rss-bridge.org/bridge01/?action=display&context=Username&u=davidBeckham&bridge=GreatFonBridge&format=Json" , 
  // 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Beckswimbledon.jpg'
  // );
  // await insertSeasons(960,seasonsFor2023)
 server.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
  );
  await initializeFunctions()
 
  await initializeAgenda(io)
  setInterval( getTransferRssFeed, oneHour * 4)
  // setInterval( fetchFaceBookRssFeed, oneMinute * 5)
  // fetchTwitter("https://rss-bridge.org/bridge01/?action=display&username=LuisSuarez9&noreply=1&noretweet=1&linkbacktotwitter=1&bridge=FarsideNitterBridge&format=Json")
 
}

startServer();
 