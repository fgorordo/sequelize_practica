const db = require('../database/models/index.js');

const actorsController = {
  list: async function (req, res) {
    try {
      let actors = await db.Actor.findAll()
      if(actors) {
        res.render('actorsList', {actors})
      }else {
        res.status(404).send({
          message: 'No se encontro el recurso'
        })
      }
    } catch (error) {
      res.send(error);
    }
  },
  details: async function (req, res) {
    try {
      let actor = await db.Actor.findByPk(req.params.id)
      if(actor) {
        res.render('actorsDetails',{ actor })
      } else {
        res.status(404).send({
          message: 'No se encontro el recurso'
        })
      }
    }catch (error) {
      res.send(error)
    }
  }
}

module.exports = actorsController;