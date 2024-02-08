const Agenda = require("agenda");
const mongoose = require('mongoose');

module.exports = (agenda) => {
    // Define 'example_now' job
    agenda.define('example_now', async (job, done) => {
        console.log('example now');
        done();
    });

    // Define 'example_in_5_seconds' job
    agenda.define('example_in_20_seconds', async (job, done) => {
        console.log('example in 20 seconds');
        done();
    });
};
