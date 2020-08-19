var express = require('express');
var router = express.Router();
var data = require('./data.json');
var posts = data.posts;
var fs = require('fs');
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'dev',
  password: "developer",
  database: 'blog'
})

connection.connect()

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'dev',
    password: 'developer',
    database: 'blog'
  }
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


  connection.query("INSERT INTO posts SET ?", post, (err, rows) => {
    console.log(err, rows);
    res.redirect('/?')
  })
})

module.exports = router;
