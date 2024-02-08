const Agenda = require("agenda");
const mongoose = require('mongoose');

async function initializeAgenda() {
    const agenda = new Agenda({ mongo: mongoose.connection });

    require('./agendaJobs')(agenda);  // Import and define jobs

    agenda.define('daily_scheduler', async (job) => {
        // Schedule or update 'example_now' job to repeat every 2 seconds
        let jo = await agenda.jobs({ name: 'example_now' });
        if (jo.length === 0) {
            jo = agenda.create('example_now');
        }
        jo.repeatEvery('2 seconds').save();
        let joo = await agenda.jobs({ name: 'example_in_20_seconds' });
        if (joo.length === 0) {
            joo = agenda.create('example_in_20_seconds');
        }
        jo.schedule('in 20 seconds').repeatEvery('2 seconds').save();

        // Similar setup for 'example_in_20_seconds' if needed
    });
 
    agenda.on('ready', async () => {
        await agenda.start();
        await agenda.every('1 day', 'daily_scheduler');
    });
} 

module.exports = initializeAgenda;
