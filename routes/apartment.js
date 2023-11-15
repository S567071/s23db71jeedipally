var express = require('express');
const apartment_controlers= require('../controllers/apartment');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('apartment', { title: 'Search Results apartment' });
});*/

router.get('/', apartment_controlers.apartment_view_all_Page );

/* GET detail costume page */
router.get('/detail', apartment_controlers.apartment_view_one_Page);

/* GET create costume page */
router.get('/create', apartment_controlers.apartment_create_Page);

module.exports = router;
