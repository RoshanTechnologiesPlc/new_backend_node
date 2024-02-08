const mongoose = require('mongoose');

const lastFiveMatchesSchema = new mongoose.Schema({
    teamId: Number,
    matches: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match"
    }]
});

module.exports = mongoose.model("LastFiveMatches", lastFiveMatchesSchema);
