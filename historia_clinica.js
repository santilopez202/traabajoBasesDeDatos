//historiaClinica.js
const { Model, DataTypes } = require('sequelize');
const connection = require('../database/connection');

class HistoriaClinica extends Model {}

HistoriaClinica.init(
  {
    id_historia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_paciente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    diagnostico: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tratamiento: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'HistoriaClinica',
    tableName: 'historias_clinicas',
    timestamps: false,
  }
);

module.exports = HistoriaClinica;
