const mongoose = require('mongoose');
const devicesSchema = new mongoose.Schema({
    id: {
        type: String,
        refreshToken: String
    }
})
const userSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: false,
        default: null
    },
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false,
        default: null
    },
    favouritePlayers: {
        type: [Number],
        index: true
    },
    favouritePodcast: {
        type: [String],
        index: true
    },
    favouriteTeams: {
        type: [Number],
        index: true
    },
    favouriteLeagues: {
        type: [Number],
        index: true
    },
    favouriteMatches: {
        type: [Number],
        index: true
    },
    paymentExpiryDate: {
        type: String,
        default: null,
        required: false
    },
    freetrial: {
        type: Boolean,
        default: false,
        required: false
    },
    imageUrl: {
        type: String,
        default: null,
        required: false
    },
})



mongoose.model('Device', devicesSchema);
module.exports = mongoose.model('User', userSchema);