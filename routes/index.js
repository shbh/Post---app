var express = require('express');
var router = express.Router();
var data = require('./data.json');
var posts = data.posts;
var fs = require('fs');

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'Shubham',
    posts: data.posts
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

  fs.readFile("./routes/data.json", 'utf8', function (err, data) {
    if (err) {
      console.log(err)
    }

    var oldData = JSON.parse(data);
    var oldPosts = oldData.posts;
    oldPosts.push(post);
    oldData.posts = oldPosts;
    fs.writeFile('./routes/data.json', JSON.stringify(oldData, null, 2), function (err, info) {
      res.redirect('/?')
    })
  })

})

module.exports = router;
