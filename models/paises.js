'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class paises extends Model {
    static associate(models) {
      paises.hasMany(models.pasaportes, {
        foreignKey: 'paisId',
      });
      paises.belongsTo(models.continentes, {
        foreignKey: 'continenteId',
      });
      
    }
  }

  paises.init({
    idPaises: {
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
    continenteId: {
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
    modelName: 'paises',
    tableName: 'paises',
    timestamps: true
  });

  return paises;
};