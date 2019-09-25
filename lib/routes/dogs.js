/* eslint-disable new-cap */
const router = require('express').Router();
const Dog = require('../models/dog');

router
  .post('/', (req, res, next) => {
    Dog.create(req.body)
      .then(dog => res.json(dog))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Dog.findById(req.params.id)
      .then(dog => res.json(dog))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Dog.find()
      .then(dogs => res.json(dogs))
      .catch(next);
  });

module.exports = router;