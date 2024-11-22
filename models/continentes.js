'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class continentes extends Model {
    static associate(models) {
      continentes.hasMany(models.paises, {
        foreignKey: 'continenteId',
      });      
    }
  }

  continentes.init({
    idContinentes: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'continentes',
    tableName: 'continentes',
    timestamps: true
  });

  return continentes;
};