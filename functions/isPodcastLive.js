function isPodcastCurrentlyLive(podcast) {
    const now = new Date(); 

    try {
        var currentDate = new Date();

        // Get the day of the week as a number (Sunday is 0, Monday is 1, ..., Saturday is 6)
        var dayOfWeek = currentDate.getDay();
        
        // Adjust the result to have Monday as 0 and Sunday as 6
        dayOfWeek = (dayOfWeek + 6) % 7;
        let time = podcast.liveTimes[dayOfWeek];

        const startTime = new Date();
        startTime.setFullYear(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        startTime.setHours(time['start-hour'], time['start-minute'], 0, 0);
        const endTime = new Date();
        endTime.setFullYear(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        endTime.setHours(time['end-hour'], time['end-minute'], 0, 0);

        const isLive = now >= startTime && now <= endTime;
        return isLive;
      
    } catch (e) {
        // Handle any errors, possibly by logging or returning a default value
        console.error("Error in isPodcastCurrentlyLive: ", e);
        return false;
    }
}

module.exports = isPodcastCurrentlyLive;


module.exports = isPodcastCurrentlyLive;
