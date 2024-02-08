const app = require('./app')
const http = require("http")
const PORT = 3001
const mongoose = require("mongoose")
const MONGO_URL =  'mongodb+srv://abubekersiraj:Mongodbpassword1234@test.zezynu2.mongodb.net/?retryWrites=true&w=majority';
const server = http.createServer(process.env.port ||app)
const makeRequest = require("./makearequest")
// const fetchStanding = require('./requests')
const fetchFixturesByLeagueId = require('./fetch/new_fetch')
const getMatchesByLeagueId = require("./models/matches.model")

mongoose.set('strictQuery', true);
mongoose.connection.once("open" , ()=>{
    console.log("mongoDB connection ready!")
}) 
 
mongoose.connection.on("error" , (error)=>{
    console.error(error);
})

async function startServer(){
    await mongoose.connect(MONGO_URL)
//    await makeRequest();
//    await fetchStanding(61);
//    await fetchStanding(135);
//  await fetchFixturesByLeagueId(135);
           server.listen(PORT , async ()=>{         
        console.log(`Listening on port : ${process.env.port || PORT}`)
        console.log("running ....") 
    })
   
  
    // setInterval(makeRequest, 2 * 60 * 60 * 1000);
 
}

startServer()
 
