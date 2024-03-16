const Podcast = require('../schemas/podcast_schema'); // Import the Podcast model

async function initializePodcastAgenda(agenda) {
    try {
        const podcasts = await Podcast.find({});
        
        podcasts.forEach(podcast => {
            podcast.liveTimes.forEach((daySchedule, dayIndex) => {
                if (daySchedule[0]['start-hour'] !== null) {
                    const liveDate = getNextLiveDate(daySchedule, dayIndex);
                    agenda.schedule(liveDate, 'notify podcast live', { podcastId: podcast.id });
                }
            });
        });
    } catch (error) {
        console.error('Error initializing podcast agenda:', error);
    }
}

function getNextLiveDate(daySchedule, dayOfWeek) {
    const now = new Date();
    const liveDate = new Date();

    liveDate.setHours(daySchedule[0]['start-hour'], daySchedule[0]['start-minute'], 0, 0);
    liveDate.setSeconds(0); // Ensure seconds are set to zero

    // Correctly adjust day of week to start from Monday (0) to Sunday (6)
    let currentDayOfWeek = now.getDay(); // JavaScript's getDay(): Sunday = 0, Monday = 1, ..., Saturday = 6
    // Convert so that Monday = 0, ..., Sunday = 6
    currentDayOfWeek = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;

    let dayDiff = dayOfWeek - currentDayOfWeek;
    if (dayDiff < 0) {
        dayDiff += 7; // If dayOfWeek has already passed, schedule for the next week
    }

    // If scheduling for today but the time has already passed, set for next week
    if (dayDiff === 0 && liveDate.getTime() <= now.getTime()) {
        dayDiff = 7;
    }

    liveDate.setDate(now.getDate() + dayDiff); // Calculate the date for the next occurrence of the day

    return liveDate;
}

module.exports = initializePodcastAgenda;
