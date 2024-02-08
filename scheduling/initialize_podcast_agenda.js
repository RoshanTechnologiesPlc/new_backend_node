const Podcast = require('../schemas/podcast_schema'); // Import the Podcast model

async function initializePodcastAgenda(agenda) {
    try {
        const podcasts = await Podcast.find({});

        podcasts.forEach(podcast => {
          
            podcast.liveTimes.forEach((daySchedule, dayIndex) => {
                if (daySchedule[0]['start-hour'] !== null) {
                    const liveDate = getNextLiveDate(daySchedule, dayIndex);
                    
                    agenda.schedule(liveDate, 'notify podcast live', { podcastId: podcast.id  });
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

    liveDate.setHours(daySchedule[0]['start-hour'], daySchedule[1]['start-minute'], 0, 0);
    liveDate.setSeconds(0);  // Ensure seconds are set to zero

    // Adjust day of week to match your array (Monday = 0, Sunday = 6)
    let currentDayOfWeek = now.getDay();
    currentDayOfWeek = (currentDayOfWeek + 6) % 7; // Convert so that Monday = 0, Sunday = 6

    let dayDiff = dayOfWeek - currentDayOfWeek;
    if (dayDiff < 0) {
        dayDiff += 7; // Schedule for the next week
    }

    // Check if the time has already passed for today
    if (dayDiff === 0 && liveDate <= now) {
        dayDiff = 7; // Schedule for the next occurrence of the day
    }

    liveDate.setDate(now.getDate() + dayDiff);

    return liveDate;
}


module.exports = initializePodcastAgenda;
