const User = require('../../schemas/user_model')
const uuid = require('uuid')
const generateAccessTokenForUser = require('../../controller/authentication/generateToken').generateAccessTokenForUser;
const generateRefreshTokenForUser = require('../../controller/authentication/generateToken').generateRefreshTokenForUser;
async function updateUserInfo(req, res) {
    const id = uuid.v4()
    const favouritePlayers = req.body.favouritePlayers

    const favouritePlayersArray = favouritePlayers.split(',').map(Number);
    const favouriteTeams = req.body.favouriteTeams
    const favouriteTeamsArray = favouriteTeams.split(',').map(Number);
    const favouriteLeagues = req.body.favouriteLeagues
    const favouriteLeaguesArray = favouriteLeagues.split(',').map(Number);
    const updatedFields = {
        favouritePlayers: favouritePlayersArray,
        favouriteTeams: favouriteTeamsArray,
        favouriteLeagues: favouriteLeaguesArray
    }

    const user =
    {
        id: id,
        favouritePlayers: favouritePlayersArray,
        favouriteTeams: favouriteTeamsArray,
        favouriteLeagues: favouriteLeaguesArray,
        favouriteMatches: [],
    }

    try {
        result = await User.findOneAndUpdate(
            { id },
            user,
            { new: true, upsert: true },
        )
       
        return res.status(201).json({
            accessToken: generateAccessTokenForUser(id),
            refreshToken: generateRefreshTokenForUser(id)
        })
    } catch (e) {
        console.log(e)
        res.status(502).send('Internal Server Error');
    }

}


async function addFavouritePlayer(req, res) {
    const { id, body: { playerId } } = req;

    try {
        const user = await User.findOne({ id });
        if (!user) return res.status(404).send("User not found");

        if (user.favouritePlayers.includes(playerId)) return res.status(400).send("Player already in favorites");

        user.favouritePlayers.push(playerId);
        await user.save();

        res.status(201).send("Player added to favorites");
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}

async function addFavouriteTeam(req, res) {
    const { phoneNumber, body: { teamId } } = req;

    try {
        const user = await User.findOne({ phoneNumber });
        if (!user) return res.status(404).send("User not found");

        if (user.favouriteTeams.includes(teamId)) return res.status(400).send("Team already in favorites");

        user.favouriteTeams.push(teamId);
        await user.save();

        res.status(201).json({
            accessToken: generateAccessTokenForUser(id),
            refreshToken: generateRefreshTokenForUser(id)

        });
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}

async function addToFavouriteMatches(req, res) {
    const id = req.user.id
    const matchId = req.body.matchId
    try {
        const user = await User.findOne({ id });
        if (!user) return res.status(404).send("User not found");

        if (user.favouriteMatches.includes(matchId)) return res.status(200).send("Match already in favorites");
        const favMatches = [...user.favouriteMatches, matchId]
        user.favouriteMatches.push(matchId);
        await user.save();
        return res.status(201).send({
            accessToken: generateAccessTokenForUser(id),
            refreshToken: generateRefreshTokenForUser(id),
            favouriteMatches: favMatches

        });

    } catch (error) {
        console.log(`error happened ${error}`)
        res.status(500).send("Something went wrong");
    }
}


async function addToFavouritePlayers(req, res) {
      const id = req.user.id
    const matchId = req.body.playerId
    try {
        const user = await User.findOne({ id });
        if (!user) return res.status(404).send("User not found");

        if (user.favouritePlayers.includes(matchId)) return res.status(200).send("Match already in favorites");
        const favMatches = [...user.favouritePlayers, matchId]
        user.favouritePlayers.push(matchId);
        await user.save();
        console.log(`success!`)
        return res.status(201).send({
            accessToken: generateAccessTokenForUser(id),
            refreshToken: generateRefreshTokenForUser(id),
            favouritePlayers: favMatches

        });

    } catch (error) {
        console.log(`error happened ${error}`)
        res.status(500).send("Something went wrong");
    }
}


async function addToFavouriteTeams(req, res) {
    // const { id, body: { matchId } } = req;
    console.log(`add fav team request`)
    const id = req.user.id

    const matchId = req.body.teamId
    console.log(`match id is ${matchId}`)
    try {
        const user = await User.findOne({ id });
        if (!user) return res.status(404).send("User not found");
        // console.log(user.favouriteTeams.includes(matchId))
        if (user.favouriteTeams.includes(matchId)) return res.status(200).send("Match already in favorites");
        const favTeams = [...user.favouriteTeams, matchId]
        user.favouriteTeams.push(matchId);
        await user.save();
        console.log(`success!`)
        return res.status(201).send({
            accessToken: generateAccessTokenForUser(id),
            refreshToken: generateRefreshTokenForUser(id),
            favouriteTeams: favTeams

        });

    } catch (error) {
        console.log(`error happened ${error}`)
        res.status(500).send("Something went wrong");
    }
}

async function addToFavouritePodcast(req, res) {
    // const { id, body: { matchId } } = req;
    console.log(`add fav team request`)
    const id = req.user.id

    const podcastId = req.body.podcastId
    console.log(`match id is ${podcastId}`)
    try {
        const user = await User.findOne({ id });
        if (!user) return res.status(404).send("User not found");
        // console.log(user.favouriteTeams.includes(matchId))
        if (user.favouritePodcast.includes(podcastId)) return res.status(200).send("Match already in favorites");
        // const favPodcast  = [...user.favouritePodcast , podcastId]
        user.favouritePodcast.push(podcastId);
        await user.save();
        console.log(`success!`)
        return res.status(201).send({
            accessToken: generateAccessTokenForUser(id),
            refreshToken: generateRefreshTokenForUser(id),
            // favouriteTeams: favTeams

        });

    } catch (error) {
        console.log(`error happened ${error}`)
        res.status(500).send("Something went wrong");
    }
}
async function removeFromFavouriteMatches(req, res) {
    // const { phoneNumber, body: { matchId } } = req;
    const id = req.user.id
    const matchId = req.body.matchId

    try {
        const user = await User.findOne({ id });
        if (!user) return res.status(404).send("User not found");

        const index = user.favouriteMatches.indexOf(matchId);
        if (index === -1) return res.status(200).send("Match not in favorites");

        user.favouriteMatches.splice(index, 1);
        await user.save();

        res.status(201).send("Match removed from favorites");
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}

async function removeFromFavouritePlayers(req, res) {
    const id = req.user.id
    const matchId = req.body.playerId

    try {
        const user = await User.findOne({ id });
        if (!user) return res.status(404).send("User not found");

        const index = user.favouritePlayers.indexOf(matchId);
        if (index === -1) return res.status(200).send("Match not in favorites");

        user.favouritePlayers.splice(index, 1);
        await user.save();

        res.status(201).send("Match removed from favorites");
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}



async function removeFromFavouriteTeams(req, res) {
    const id = req.user.id
    const matchId = req.body.teamId
    console.log(matchId)
    console.log(id)

    try {
        const user = await User.findOne({ id });
        // console.log(user)
        if (!user) return res.status(404).send("User not found");

        const index = user.favouriteTeams.indexOf(matchId);
        if (index === -1) return res.status(200).send("Match not in favorites");

        user.favouriteTeams.splice(index, 1);
        await user.save();

        res.status(201).send("Match removed from favorites");
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}




async function removeFromFavouritePodcast(req, res) {
    const id = req.user.id
    const matchId = req.body.teamId

    try {
        const user = await User.findOne({ id });
        // console.log(user)
        if (!user) return res.status(404).send("User not found");

        const index = user.favouritePodcast.indexOf(matchId);
        if (index === -1) return res.status(200).send("Match not in favorites");

        user.favouritePodcast.splice(index, 1);
        await user.save();

        res.status(201).send("Match removed from favorites");
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}
async function checkMatchFollowing(req, res) {

    try {
        const matchid = req.body.matchId

        const query = {
            id: req.user.id,
            favouriteMatches: { $in: [matchid] }
        };

        const document = await User.findOne(query);

        if (document) {

            return res.status(200).json({
                following: true
            });
        } else {

            return res.status(200).json({
                following: false
            });
        }


    } catch (e) {
        console.log(e)
        res.status(502).send('Internal Server Error');
    }
}



async function checkTeamFollowing(req, res) {

    try {
        const matchid = req.body.teamId

        const query = {
            id: req.user.id,
            favouriteTeams: { $in: [matchid] }
        };

        const document = await User.findOne(query);

        if (document) {

            return res.status(200).json({
                following: true
            });
        } else {

            return res.status(200).json({
                following: false
            });
        }


    } catch (e) {
        console.log(e)
        res.status(502).send('Internal Server Error');
    }
}

async function checkPodcastFollowing(req, res) {

    try {
        const podcastId = req.body.podcastId

        const query = {
            id: req.user.id,
            favouritePodcast: { $in: [podcastId] }
        };
        console.log(query)
        const document = await User.findOne(query);

        if (document) {

            return res.status(200).json({
                following: true
            });
        } else {

            return res.status(200).json({
                following: false
            });
        }


    } catch (e) {
        console.log(e)
        res.status(502).send('Internal Server Error');
    }
}

async function checkPlayerFollowing(req, res) {

    try {
        const matchid = req.body.playerId

        const query = {
            id: req.user.id,
            favouritePlayers: { $in: [matchid] }
        };

        const document = await User.findOne(query);

        if (document) {

            return res.status(200).json({
                following: true
            });
        } else {

            return res.status(200).json({
                following: false
            });
        }


    } catch (e) {
        console.log(e)
        res.status(502).send('Internal Server Error');
    }
}
module.exports = {
    checkTeamFollowing,
    checkPlayerFollowing,
    updateUserInfo,
    addFavouritePlayer,
    removeFromFavouritePlayers,
    removeFromFavouriteTeams,
    addFavouriteTeam,
    addToFavouriteMatches,
    addToFavouritePlayers,
    addToFavouriteTeams,
    removeFromFavouriteMatches,
    checkMatchFollowing,
    checkPodcastFollowing,
    addToFavouritePodcast,
    removeFromFavouritePodcast
}