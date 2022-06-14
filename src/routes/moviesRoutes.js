const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies/create', moviesController.create)
router.post('/movies/upload', moviesController.upload)
router.delete('/movies/destroy/:id', moviesController.destroy)
router.get('/movies/edit/:id', moviesController.edit)
router.put('/movies/update/:id', moviesController.update)


module.exports = router;