const { Schema, model } = require('mongoose');

const droneSchema = Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
});

const Drone = model('Drone', droneSchema);

module.exports = Drone;