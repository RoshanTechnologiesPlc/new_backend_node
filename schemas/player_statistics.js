const mongoose = require("mongoose")
const TeamDataSchema = require("./team_data")
const LeagueName = require("./leagueNamesSchema")

const playerStatistics = new mongoose.Schema(
    {
      id  : Number , 
      team : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "TeamDataSchema"
      } ,
      league : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "LeagueName"
      } ,
      // amharicTeamName : {type : Number,  default : null  } ,
      // amharicLeagueName : {}
      gameAppearances : {type : Number,  default : null  } , 
      gameLineups  :  {type : Number,  default : null  } , 
      gameMinutes :  {type : Number,  default : null  } , 
      gameNumber :  {type : Number,  default : null  } , 
      gamePosition :  {type : String,  default : null  } , 
      gameRating  :  {type : String,  default : null  } , 
      gameCaptain :  {type : Boolean ,  default : null  } , 
      substitutedIn :  {type : Number,  default : null  } , 
      substitutedOut :  {type : Number,  default : null  }, 
      substitutedBench :  {type : Number,  default : null  } , 
      totalShot :  {type : Number,  default : null  } ,  
      onShot :  {type : Number,  default : null  } , 
      totalGoals :  {type : Number,  default : null  } , 
      goalsConceded :  {type : Number,  default : null  }  ,
      assists :  {type : Number,  default : null  } , 
      totalSaves :  {type : Number,  default : null  } , 
      totalPasses  : {type : Number,  default : null  } , 
      keyPasses :  {type : Number,  default : null  }, 
      passesAccuracy  :  {type : Number,  default : null  }, 
      totalTackles :  {type : Number,  default : null  }, 
      totalBlocks :  {type : Number,  default : null  } , 
      totalInterceptions :  {type : Number,  default : null  } , 
      duelsTotal :  {type : Number,  default : null  } , 
      duelsWon :  {type : Number,  default : null  }, 
      dribbleAttempts :  {type : Number,  default : null  } , 
      dribbleSuccess  :  {type : Number,  default : null  } , 
      dribblePast :  {type : Number,  default : null  }, 
      foulsDrawn : {type : Number,  default : null  } , 
      foulsCommitted :  {type : Number,  default : null  } , 
      yellowCards :  {type : Number,  default : null  } , 
      yellowRedCards :  {type : Number,  default : null  },  
      redCards :  {type : Number,  default : null  } , 
      penalityWon :  {type : Number,  default : null  }, 
      penalityCommitted :  {type : Number,  default : null  }, 
      penalityScored :  {type : Number,  default : null  }, 
      penalityMissed :  {type : Number,  default : null  }, 
      penalitySaved :  {type : Number,  default : null  }  }
);
module.exports  =  mongoose.model("PlayerStatistics" , playerStatistics )