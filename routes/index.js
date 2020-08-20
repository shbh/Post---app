var express = require('express');
var router = express.Router();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var pg = require('pg');
pg.defaults.ssl = true;

var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  searchPath: ['knex', 'public'],
});


/* GET home page. */


router.get('/', function (req, res, next) {

  knex.select().table('posts').orderBy('created_at', 'desc').then((data) => {
    console.log(data);

    res.render('index', {
      title: 'Express',
      name: 'Shubham',
      posts: data
    });

  })


  // connection.query("SELECT * FROM posts ORDER BY created_at DESC", (err, rows) => {
  //   console.log(err, rows);
  //   res.render('index', {
  //     title: 'Express',
  //     name: 'Shubham',
  //     posts: rows
  //   });

})







router.post('/create', function (req, res, next) {

  const title = req.body.title;
  const body = req.body.body;
  const post = {
    title: title,
    body: body,
    // cover: "https://picsum.photos/200/100",

  }

  knex("posts").insert(post).then(() => {
    console.log('data inserted')

    res.redirect('/?')

  })
  //   connection.query("INSERT INTO posts SET ?", post, (err, rows) => {
  //     console.log(err, rows);
  //   })
})

module.exports = router;
