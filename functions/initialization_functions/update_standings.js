const fetchStandingNew = require("../../fetch/fetch_league_statistics")
const oneHour = 1000 * 60 * 60;
async function updateStandings() {
  
    const ourLeagues = [ // 4 , 
      39, 2, 140, 135, 78, 363, 61, 307, 45, 41, 40, 42, 6,
      // 4 , 
      // 960,
      //   1  , 5 ,  29  , 32  , 34   , 31  ,  30 , 33  
  
    ];
    for (let i = 0; i < ourLeagues.length; i++) {
  
      try {
        await fetchStandingNew(ourLeagues[i], 2023);
        console.log("Fetch standing data completed successfully for league ID:", ourLeagues[i]);
    } catch (error) {
        console.error("Error fetching standing data for league ID:", ourLeagues[i], error);
    }
    }
  }
try {
    periodicUpdate();
    console.log("Periodic update initiated.");
} catch (error) {
    console.error("Error initiating periodic update:", error);
}

  async function periodicUpdate() {
    await updateStandings();
    setInterval(periodicUpdate, oneHour * 2);
}
module.exports = periodicUpdate