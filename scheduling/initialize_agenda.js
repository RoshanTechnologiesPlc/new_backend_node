const Agenda = require("agenda");
const mongoose = require('mongoose')
const getTodaysMatches = require('../fetch/getTodaysFixtures')
const initializePodcastAgenda = require('./initialize_podcast_agenda.js'); // Importing the function
const setupPodcastTasks = require("./podcast_tasks.js")
const scheduleMatches = require('./scheduleMatches.js')


async function initializeAgenda(io) {
  const agenda = new Agenda({ mongo: mongoose.connection });
  require('./agenda.js')(agenda , io);


  
    // Clear all existing jobs
    await agenda.cancel({});

setupPodcastTasks(agenda , io)

  agenda.define('daily match scheduler', async (job) => {
  await scheduleMatches();

  // Calculate the next 12:01 AM UTC
  let nextRun = new Date();
  nextRun.setUTCHours(0, 1, 0, 0); // set time to 00:01:00.000 UTC
  if (nextRun < new Date()) {
    // If it's already past 00:01 UTC, set for the next day
    nextRun.setUTCDate(nextRun.getUTCDate() + 1);
  }

  // Schedule the next execution
  await job.schedule(nextRun).save();
});


  agenda.define('podcast scheduler' , async()=>{
       await initializePodcastAgenda(agenda );
  })

  agenda.on('ready', async () => {
    await agenda.start();
 
    // Check if 'daily match scheduler' already exists
    // const existingDailyScheduler = await agenda.jobs({ name: 'daily match scheduler' });

    // if (existingDailyScheduler.length === 0) {
    // Schedule the daily match scheduler if it doesn't exist
 
 
    const dailyScheduler = agenda.create('daily match scheduler');
    const podcastScheduler = agenda.create('podcast scheduler');
    // await dailyScheduler.schedule('now').save();
    // await podcastScheduler.schedule('now').save();

    await dailyScheduler.repeatEvery('1 day', {
      // skipImmediate: true,
      timezone: 'UTC'
    }).schedule('1 0 * * *').save();

    // REPEAT EVERY 1 WEEK FOR PODCAST
    await podcastScheduler.repeatEvery('1 week', {
      // skipImmediate: true,
      timezone: 'UTC'
    }).schedule('0 0 * * 1').save();
  
    // }

    // Schedule today's matches right away
    await scheduleMatches(agenda);
    await initializePodcastAgenda(agenda);
  });

}

module.exports = initializeAgenda;