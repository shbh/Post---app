
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


// knex.select('posts').then(d => {
//   console.log(d)
// })
//   .catch(err => {
//     console.log(err);
//   });


// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'dev',
//   password: "developer",
//   database: 'blog'
// })

// connection.connect()


// connection.query("CREATE TABLE posts(title TEXT, body TEXT, id INT AUTO_INCREMENT PRIMARY KEY, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)", (err, rows) => {
//   console.log(err, rows);
// });


// connection.end()