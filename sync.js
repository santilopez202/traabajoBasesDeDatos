// sync.js
/*
const {Sequelize}= require ('sequelize');   
const connection = require('./connection');
const cita = require('../models/cita');
const medico = require('../models/medico');

async function sync() {
    // foreign keys
    medico.hasMany(cita, {
        foreignKey: 'id_medico_1'
    });
    cita.belongsTo(medico, {
        foreignKey: 'id_medico_1'
    });
}

module .exports = sync;
sync();
*/