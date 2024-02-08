const teamDataSchema =  require("../schemas/team_data")
const fetchStandingNew = require("./../fetch/fetch_league_statistics") 
// const teamNames = [
//     {
//         "id": 47,
//         "amharicName": "ቶትንሃም"
//     },
//     {
//         "id": 40,
//         "amharicName": "ሊቨርፑል"
//     },
//     {
//         "id": 51,
//         "amharicName": "ብራይተን"
//     },
//     {
//         "id": 34,
//         "amharicName": "ኒውካስትል"
//     },
//     {
//         "id": 33,
//         "amharicName": "ማንችስተር ዩናይትድ"
//     },
//     {
//         "id": 49,
//         "amharicName": "ቼልሲ"
//     },
//     {
//         "id": 65,
//         "amharicName": "ኖቲንግሃም ፎረስት"
//     },
//     {
//         "id": 39,
//         "amharicName": "ዎልቭስ"
//     },
//     {
//         "id": 16,
//         "amharicName": "ኤቨርተን"
//     },
//     {
//         "id": 20,
//         "amharicName": "ሼፊልድ ዩናይትድ"
//     }, 
//     {
//         "id": 1359,
//         "amharicName": "ሉተን"
//     }, 
//     {
//         "id": 35,
//         "amharicName": "ቦርንማውዝ"
//     }  , 
//     {
//         "id": 52,
//         "amharicName": "ክሪስታል ፓላስ"
//     } , 
//     {
//         "id": 45,
//         "amharicName": "ኤቨርተን"
//     }  , 
//     {
//         "id": 62,
//         "amharicName": "ሼፊልድ ዩናይትድ"
//     }  , 
//     {
//         "id": 55,
//         "amharicName": "ብሬንትፎርድ"
//     } 
// ]

  

const teamNames = [
    {
        "id": 4119,
        "amharicName": "ቅዱስ ጊዮርጊስ" }, 
        {
            "id": 4111,
            "amharicName": "ሐዋሳ ከነማ"
        }   ,
        {
            "id": 4130,
            "amharicName": "የኢትዮጵያ ንግድ ባንክ"
        }  , 
        {
            "id": 4120,
            "amharicName": "መከላከያ"
        } , 
        {
            "id": 4112,
            "amharicName": "ባህር ዳር"
        }  , 
        {
            "id": 9987,
            "amharicName": "ወልቂጤ ከነማ"
        }  , 
        {
            "id": 22233,
            "amharicName": "ሻሸመኔ ከነማ"
        }  , 


]

async function updateTeamNames(leagueId){
    for(let i = 0 ; i < teamNames.length ; i++){
        team = teamNames[i]
        try{
            console.log(team)
            await teamDataSchema.updateOne(
                { id  : team.id } , 
                { $set : {
                    AmharicName : team.amharicName ,
                    // EnglishName : team.englishName , 
                    // OromoName : team.oromoName ,
                    // SomaliName : team.somaliName ,
                    translated : true
                } }
            )
            console.log(`updated ${team.amharicName}`)
        }catch(e){
            console.log(`caught an error e : ${e}`) }
    }


    try{
        await fetchStandingNew(leagueId , 2023)
        await fetchStandingNew(leagueId , 2022)
        await fetchStandingNew(leagueId , 2021)
        await fetchStandingNew(leagueId , 2020)
    }catch(e){
        console.log(`caught an error e : ${e}`) }
    }



module.exports = updateTeamNames