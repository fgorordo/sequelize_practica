const db = require('../database/models/index.js')

const genresController = {
  list: function (req,res) {
    db.Genre.findAll()
    .then(function(genres) {
      res.render('genresList',{genres})
    })
    .catch(function(errors) {
      res.send(errors)
    })
  },
  detail: function(req, res) {
    db.Genre.findByPk(req.params.id)
    .then(function(genre) {
      res.render('genresDetail', {genre})
    })
    .catch(function(errors) {
      res.send(errors)
    })
  },
}

module.exports = genresController;