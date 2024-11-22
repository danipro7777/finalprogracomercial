'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pasaportes', {
      idPasaportes: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      correlativo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      estado: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      personaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'personas',
          key: 'idpersonass'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      paisId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'paises',
          key: 'idPaises'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pasaportes');
  }
};