'use strict';

// npm packages
var st = require('st')
var mount = st({ path: process.cwd()+ '/public', url: '/' });

module.exports = function (req, res) {
  if (!mount(req, res)) return res.error(404)
};
