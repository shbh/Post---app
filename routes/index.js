var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'Shubham',
    posts: [{
      title: "this is post title",
      body: "As your wish post ",
      cover: "https://picsum.photos/200/100"
    },
    {
      title: "this is post title 2",
      body: "As your wish post 2 ",
      cover: "https://picsum.photos/200/100",

    },
    {
      title: "this is post title 3",
      body: "As your wish post 3 ",
      cover: "https://picsum.photos/200/100",

    }
    ]

  });
});

module.exports = router;
