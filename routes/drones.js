const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

// Read
router.get('/drones', (req, res) => {

  Drone
    .find()
    .then(drones => res.render('drones/list', { drone: drones }))
    .catch(err => res.send(err))

});

router.get('/drones/create', (req, res) => res.render('drones/create-form'));

// Create
router.post('/drones/create', (req, res) => {

  const { name, propellers, maxSpeed } = req.body;

  Drone
    .create({
      name: name,
      propellers: propellers,
      maxSpeed: maxSpeed
    })

    .then(res.redirect('/'))
    .catch(err => res.send(err))

});

// Update
router.get('/drones/:id/edit', (req, res) => {

  Drone
    .findById(req.params.id)
    .then(foundDrone => res.render('drones/update-form', foundDrone))
    .catch(err => res.send(err))

});

router.post('/drones/:id/edit', (req, res) => {
  const { name, propellers, maxSpeed } = req.body;

  Drone
    .findByIdAndUpdate(req.params.id, {
      name: name,
      propellers: propellers,
      maxSpeed: maxSpeed
    })

    .then(res.redirect('/drones'))
    .catch(err => res.send(err))

});

// Delete
router.post('/drones/:id/delete', (req, res) => {

  Drone
    .findByIdAndRemove(req.params.id)
    .then(res.redirect('/drones'))
    .catch(err => res.send(err))

});

module.exports = router;
