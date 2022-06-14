const db = require('../database/models/index.js')
const { Op, where } = require("sequelize");

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
  },
  create: function(req, res) {
    res.render('createMovie');
  },
  upload: async function(req, res) {
     try {
      await db.Movie.create({
      title: req.body.name,
      rating: req.body.rating,
      awards: req.body.awards,
      length: req.body.length,
      release_date: req.body.release_date
    })
    .then(function(){
      res.redirect('/movies')
    })
    } catch (error) {
      res.send(errors)
    }
  },
  destroy: async function(req,res) {
    try {
      await db.Movie.destroy({
      where: {
        id:req.params.id
      }
      })
      .then(function() {
      res.redirect('/movies')
      })
    } catch (errors) {
      res.send(errors)
    }
  },
  edit: async function(req, res) {
    try {
      await db.Movie.findByPk(req.params.id)
      .then(movie => {
        let fixedMonth = (movie.release_date.getMonth() + 1) > 10 ? (movie.release_date.getMonth() + 1) : '0' +(movie.release_date.getMonth() + 1);
        let fixedDay = (movie.release_date.getDate() + 1) > 10 ? (movie.release_date.getDate() + 1) : '0' +(movie.release_date.getDate() + 1);
        let fixedYear = movie.release_date.getFullYear();
        let fixedDate = `${fixedYear}-${fixedMonth}-${fixedDay}`
        res.render('editMovie',{movie, release_date:fixedDate})
      })
    } catch (errors){
      res.send(errors)
    }
  },
  update: async function(req, res) {
    try{
      await db.Movie.update({
        title: req.body.name,
        rating: req.body.rating,
        awards: req.body.awards,
        length: req.body.length,
        release_date: req.body.release_date
      },
      {
        where: {id:req.params.id}
      })
      .then(function() {
        res.redirect('/movies/detail/' + req.params.id)
      })
    } catch (errors) {
      res.send(errors)
    }
  },
}

module.exports = moviesController