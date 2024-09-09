var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });




function randomPage(req, res) {

  res.render('random', {title: "My title", paragraphs: "", links: "links"});
}

router.all('*', randomPage);

module.exports = router;
