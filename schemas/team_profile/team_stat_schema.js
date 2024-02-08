const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const minuteDataSchema = new Schema({
    '0-15': {
        total: { type: Number, default: null },
        percentage: { type: String, default: null }
    },
    '16-30': {
        total: { type: Number, default: null },
        percentage: { type: String, default: null }
    },
    '31-45': {
        total: { type: Number, default: null },
        percentage: { type: String, default: null }
    },
    '46-60': {
        total: { type: Number, default: null },
        percentage: { type: String, default: null }
    },
    '61-75': {
        total: { type: Number, default: null },
        percentage: { type: String, default: null }
    },
    '76-90': {
        total: { type: Number, default: null },
        percentage: { type: String, default: null }
    },
    '91-105': {
        total: { type: Number, default: null },
        percentage: { type: String, default: null }
    },
    '106-120': {
        total: { type: Number, default: null },
        percentage: { type: String, default: null }
    }
});

const goalsSchema = new Schema({
    total: {
        home: { type: Number, default: null },
        away: { type: Number, default: null },
        total: { type: Number, default: null }
    },
    average: {
        home: { type: String, default: null },
        away: { type: String, default: null },
        total: { type: String, default: null }
    },
    minute: minuteDataSchema
});

const fixturesSchema = new Schema({
    played: {
        home: { type: Number, default: null },
        away: { type: Number, default: null },
        total: { type: Number, default: null }
    },
    wins: {
        home: { type: Number, default: null },
        away: { type: Number, default: null },
        total: { type: Number, default: null }
    },
    draws: {
        home: { type: Number, default: null },
        away: { type: Number, default: null },
        total: { type: Number, default: null }
    },
    loses: {
        home: { type: Number, default: null },
        away: { type: Number, default: null },
        total: { type: Number, default: null }
    }
});

const lineupSchema = new Schema({
    formation: { type: String, default: null },
    played: { type: Number, default: null }
});

const teamStatsSchema = new Schema({
    id : Number ,
    name : String, 
    season : Number ,
    
    league : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "LeagueName"  } ,
    
    
    form: { type: String, default: null },
    fixtures: fixturesSchema,
    goals: {
        for: goalsSchema,
        against: goalsSchema
    },
    biggest: {
        streak: {
            wins: { type: Number, default: null },
            draws: { type: Number, default: null },
            loses: { type: Number, default: null }
        },
        wins: { 
            home: { type: String, default: null },
            away: { type: String, default: null }
        },
        loses: {  
            home: { type: String, default: null },
            away: { type: String, default: null }
        },
        goals: {
            for: {
                home: { type: Number, default: null },
                away: { type: Number, default: null }
            },
            against: {
                home: { type: Number, default: null },
                away: { type: Number, default: null }
            }
        }
    },
    clean_sheet: {
        home: { type: Number, default: null },
        away: { type: Number, default: null },
        total: { type: Number, default: null }
    },
    failed_to_score: {
        home: { type: Number, default: null },
        away: { type: Number, default: null },
        total: { type: Number, default: null }
    },
    penalty: {
        scored: {
            total: { type: Number, default: null },
            percentage: { type: String, default: null }
        },
        missed: {
            total: { type: Number, default: null },
            percentage: { type: String, default: null }
        },
        total: { type: Number, default: null }
    },
    lineups: [lineupSchema],
    cards: {
        yellow: minuteDataSchema,
        red: minuteDataSchema
    }
});

const TeamStats = mongoose.model('TeamStats', teamStatsSchema);
module.exports = TeamStats;
