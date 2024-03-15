const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topScorerModelSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  leagueid: Number,
  season: Number,
  __v: Number,
  scorers: [{
    player: {
      id: Number,
      name: String,
      firstname: String,
      lastname: String,
      age: Number,
      birth: {
        date: String,
        place: String,
        country: String
      },
      nationality: String,
      height: String,
      weight: String,
      injured: Boolean,
      photo: String
    },
    statistics: [{
      team: {
        id: Number,
        name: String,
        logo: String
      },
      league: {
        id: Number,
        name: String,
        country: String,
        logo: String,
        flag: String,
        season: Number
      },
      games: {
        appearences: Number,
        lineups: Number,
        minutes: Number,
        number: { type: Number, default: null },
        position: String,
        rating: String,
        captain: Boolean
      },
      substitutes: {
        in: Number,
        out: Number,
        bench: Number
      },
      shots: {
        total: Number,
        on: Number
      },
      goals: {
        total: Number,
        conceded: { type: Number, default: 0 }, // Assuming default as 0 for clarity
        assists: Number,
        saves: { type: Number, default: null }
      },
      passes: {
        total: Number,
        key: Number,
        accuracy: Number
      },
      tackles: {
        total: Number,
        blocks: Number,
        interceptions: Number
      },
      duels: {
        total: Number,
        won: Number
      },
      dribbles: {
        attempts: Number,
        success: Number,
        past: { type: Number, default: null }
      },
      fouls: {
        drawn: Number,
        committed: Number
      },
      cards: {
        yellow: Number,
        yellowred: Number,
        red: Number
      },
      penalty: {
        won: { type: Number, default: null },
        commited: { type: Number, default: null },
        scored: Number,
        missed: Number,
        saved: { type: Number, default: null }
      }
    }]
  }]
});

const TopScorerModel = mongoose.model('TopScorer', topScorerModelSchema);

module.exports = TopScorerModel;
