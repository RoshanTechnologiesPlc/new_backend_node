const app = require("./appp");
const port = process.env.PORT || 3001
const socketIO = require("socket.io")
const userSockets = require("./socket/userSocket")
const mongoose = require("mongoose");
const initializeAgenda = require('./scheduling/initialize_agenda')
const fetchFixtures= require("./fetch/fetch_fixtures");
const verifyUserAccessTokenAndReturnId = require("./middleware/return_id_from_access_token")
const http = require("http")
const { seasonsFor2023, seasonsFor2022, seasonsForWorldCup } = require("./constants/availableSeasons")
const notifyUserIfFavoritePodcastIsLive = require('./socket/podcast_notifier')
const getTransferRssFeed = require("./rss_json/transfer")
const initializeFunctions = require("./functions/initialization_functions/initialize_functions")
const fetchAndStoreSummary = require("./newsAi/webScrapping/news_logic")
const MONGO_URL = 'mongodb+srv://abubekersiraj:Mongodbpassword1234@test.zezynu2.mongodb.net/?retryWrites=true&w=majority';

require("dotenv").config();

mongoose.connect(url)
  .then(() => {
    console.log('connected');
    startServer();
   
//    
  })
  .catch(err => {
    console.error(`Error connecting to the database: ${err}`);
  });
 

const server = http.createServer(app)

const io = socketIO(server)

io.on('connection', (socket) => {
  
  console.log('A new user connected.');

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



async function startServer() {

 

 server.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
  );
  await initializeFunctions()
 await fetchFixtures()
  await initializeAgenda(io)
  setInterval( initializeFunctions, oneHour * 4)
 setInterval(fetchFixtures,oneDay)

}


 

 
