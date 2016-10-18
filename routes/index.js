'use strict';

var Fruit = require('../models/Fruit.js');

function index (req, res, config) {
  Fruit.find({}).select('name value -_id').sort({'value': -1}).limit(5).exec(function (err, fruits) {
    if (err) return next(err);
    // chart JSON data
    var json = {
      chart: {
        type: "pie",
        title: 'Top 5 Fruits',
        data: fruits,
        container: "container"
      }
    };
    res.template('index.ejs', { title: 'Anychart NodeJS demo', chart: JSON.stringify(json) });
  });
}

module.exports = index;