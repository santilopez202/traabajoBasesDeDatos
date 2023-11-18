// cita.js
const { Model, DataTypes } = require('sequelize');
const connection = require('../database/connection');

class Cita extends Model {}

Cita.init(
  {
    id_cita: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    id_paciente_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_medico_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection, 
    modelName: 'Cita', 
    tableName: 'citas',
    timestamps: false, 
  }
);

module.exports = Cita;

