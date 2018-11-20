"use strict";

var getOngs = function getOngs(req, res) {
  var ongs = [{
    name: 'Lar das moças cegas'
  }];
  res.status(200).json(ongs);
};

var api = {
  getOngs: getOngs
};
module.exports = api;