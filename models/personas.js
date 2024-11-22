'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class personas extends Model {
    static associate(models) {
      // relacion pasaportes
      personas.hasMany(models.pasaportes, {
        foreignKey: 'personaId',
      });      
    }
  }

  personas.init({
    idPersonas: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.INTEGER,
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
    modelName: 'personas',
    tableName: 'personas',
    timestamps: true
  });

  return personas;
};