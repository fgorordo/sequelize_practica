const db = require('../database/models/index.js')
const { Op } = require("sequelize");

const moviesController = {
  list: function (req, res) {
    db.Movie.findAll()
      .then(function (movies) {
        res.render('moviesList', { movies })
      })
      .catch(function (error) {
        res.send(error)
      })
  },
  detail: function (req, res) {
    db.Movie.findByPk(req.params.id)
      .then(function (movie) {
        res.render('moviesDetail', { movie })
      })
      .catch(function (errors) {
        res.send(errors)
      })
  },
  new: function (req, res) {
    db.Movie.findAll({
      order: [['release_date', 'DESC']]
    }).then(function (movies) {
      res.render('newestMovies', { movies })
    })
      .catch(function (errors) {
        res.send(errors)
      })
  },
  recomended: function (req, res) {
    db.Movie.findAll(
      {order: [['rating', 'DESC']],
      limit:5},
      {where: {rating: { [Op.gte]: 7 }}},
      )
      .then(function (movies) {
        res.render('recommendedMovies', { movies })
      })
      .catch(function (errors) {
        res.send(errors)
      })
  }
}

module.exports = moviesController