"use strict";

module.exports = function (app) {
  app.route('/ongs').get(app.api.ongs.getOngs);
};