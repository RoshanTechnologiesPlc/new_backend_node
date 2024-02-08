const mongoose = require('mongoose');

const matchStatisticsSchema = new mongoose.Schema({
  teamId : {type : Number , default : null},
  fixtureId : Number, 
  shotsOnGoal :{ type: Number, default: null }, 
  shotsOfGoal: { type: Number, default: null },
  totalShots: { type: Number, default: null },
  blockedShots: { type: Number, default: null },
  shotsInsideBox: { type: Number, default: null },
  shotsOutsideBox: { type: Number, default: null },
  fouls: { type: Number, default: null },
  cornerKicks: { type: Number, default: null },
  offsides: { type: Number, default: null },
  ballPossession: { type: Number, default: null },
  yellowCards: { type: Number, default: null },
  redCards: { type: Number, default: null },
  goalKeeperSaves: { type: Number, default: null },
  totalPasses: { type: Number, default: null },
  passesAccurate: { type: Number, default: null },
  passesInPercent: { type: Number, default: null },
});



module.exports =mongoose.model('MatchStatistics', matchStatisticsSchema);
