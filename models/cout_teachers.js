const knex = require('../db').knex;
const teacher = require('./sysmodel');

teacher.count().then((count) => {
    console.log(`There are ${count} teacher`);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    knex.destroy();
});