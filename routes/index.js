var express = require('express');
var router = express.Router();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var pg = require('pg');
pg.defaults.ssl = true;

var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgresql:dev:password@localhost:5432/blog',
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

})







router.post('/create', function (req, res, next) {

  const title = req.body.title;
  const body = req.body.body;
  const post = {
    title: title,
    body: body,
  }

  knex("posts").insert(post).then(() => {
    console.log('data inserted')

    res.redirect('/?')

  })
})

/* GET post page */

router.get('/posts/:id', function (req, res, next) {

  knex('posts').where('id', parseInt(req.params.id))
    .then(data => {
      if (!data.length) {
        return res.status(404).send('No post found');
      }
      return res.render('post', { title: 'post', name: 'post', post: data[0] });
    })
    .catch(err => {
      res.status(404).send('No post found');
      console.log(err);
    })
});

module.exports = router;
