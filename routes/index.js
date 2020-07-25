var express = require('express');
var router = express.Router();
var posts = [{
  title: "this is post title",
  body: "As your wish post ",
  cover: "https://picsum.photos/200/100"
},
{
  title: "this is post title 2",
  body: "As your wish post 2 ",
  cover: "https://picsum.photos/200/100",

},

]

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'Shubham',
    posts: posts
  });




});

router.post('/create', function (req, res, next) {


  const title = req.body.title;
  const body = req.body.body;
  const post = {
    title: title,
    body: body,
    cover: "https://picsum.photos/200/100",

  }
  posts.push(post)

  res.redirect('/')
})

module.exports = router;
