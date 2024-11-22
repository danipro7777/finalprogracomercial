'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class pasaportes extends Model {
    static associate(models) {
      pasaportes.belongsTo(models.personas, {
        foreignKey: 'personaId', 
      });
      pasaportes.belongsTo(models.paises, {
        foreignKey: 'paisId',
      });      
    }
  }

  pasaportes.init({
    idPasaportes: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    correlativo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    personaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paisId: {
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
    modelName: 'pasaportes',
    tableName: 'pasaportes',
    timestamps: true
  });

  return pasaportes;
};
