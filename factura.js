const { Model, DataTypes } = require('sequelize');
const connection = require('../database/connection');

class Factura extends Model {}

Factura.init(
  {
    id_factura: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_paciente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_emision: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    monto: {
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'Factura',
    tableName: 'facturas',
    timestamps: false,
  }
);

module.exports = Factura;
