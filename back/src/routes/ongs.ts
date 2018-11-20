module.exports = (app) => {
  app.route('/ongs')
    .get(app.api.ongs.getOngs);
};
