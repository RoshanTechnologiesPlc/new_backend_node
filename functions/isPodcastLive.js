function isPodcastCurrentlyLive(podcast) {
    const now = new Date(); 

    try {
        var currentDate = new Date();
        var dayOfWeek = currentDate.getDay();
        dayOfWeek = (dayOfWeek + 6) % 7; // Adjust day of the week
        
        let time = podcast.liveTimes[dayOfWeek];
        if (!time) { // Check if time is undefined or null
            console.error("No live time scheduled for today.");
            return false;
        }

        const startTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), time['start-hour'], time['start-minute'], 0);
        const endTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), time['end-hour'], time['end-minute'], 0);

        return now >= startTime && now <= endTime;
      
    } catch (e) {
        console.error("Error in isPodcastCurrentlyLive: ", e);
        return false;
    }
}
