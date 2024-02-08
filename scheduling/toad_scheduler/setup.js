const getTodaysMatches = require('../../fetch/getTodaysFixtures')

const { ToadScheduler, SimpleIntervalJob, AsyncTask } = require('toad-scheduler');

const scheduler = new ToadScheduler();


const dailyTask = new AsyncTask(
    'daily task',
    async () => {
      const matches = await getTodaysMatches();
      matches.forEach(scheduleMatchTasks);
    },
    (err) => {
      console.error(err);
    }
  );
  
  const dailyJob = new SimpleIntervalJob({ hours: 24, runImmediately: true }, dailyTask);
  scheduler.addSimpleIntervalJob(dailyJob);
  

  