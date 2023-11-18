// medico.js
const { Model, DataTypes } = require('sequelize');
const connection = require('../database/connection');

class Medico extends Model {}

Medico.init(
  {
    id_medico_1: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection, 
    modelName: 'Medico', 
    tableName: 'medicos', 
    timestamps: false, 
  }
);

module.exports = Medico;
