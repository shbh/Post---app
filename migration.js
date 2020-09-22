process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var pg = require('pg');
pg.defaults.ssl = true;



var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  searchPath: ['knex', 'public'],
});


knex.schema.createTable('posts', (table) => {

  table.increments();
  table.string('title');
  table.string('body');
  table.timestamps(true, true);

})
  .then(d => {
    console.log(d);
  })
  .catch(err => {
    console.log(err);
  });

