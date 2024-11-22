'use strict';
const Sequelize = require('sequelize');
const db = require('../models');
const Pasaportes = db.pasaportes;
const Personas = db.personas;
const Paises = db.paises;
const Continentes = db.continentes;

module.exports = {
  // * Obtener todos los pasaportes
  async find(req, res) {
    try {
      const allPasaportes = await Pasaportes.findAll({
        include: [
          Personas,
          { model: Paises, include: [Continentes] }, 
        ],
      });
      return res.status(200).send(allPasaportes);
    } catch (error) {
      console.error('Error al obtener los pasaportes:', error);
      return res.status(500).send({ message: 'Error al obtener los pasaportes.', error });
    }
  },

  // * Obtener un pasaporte por su ID
  async findById(req, res) {
    const { id } = req.params;
    try {
      const pasaporte = await Pasaportes.findByPk(id, {
        include: [
          Personas, 
          { model: Paises, include: [Continentes] }, 
        ],
      });

      if (!pasaporte) {
        return res.status(404).send({ message: 'Pasaporte no encontrado.' });
      }

      return res.status(200).send(pasaporte);
    } catch (error) {
      console.error('Error al obtener el pasaporte:', error);
      return res.status(500).send({ message: 'Error al obtener el pasaporte.', error });
    }
  },

  // * Encontrar pasaportes por persona
  async findByPersona(req, res) {
    const { personaId } = req.params;
    try {
      const pasaportesPorPersona = await Pasaportes.findAll({
        where: { personaId }, 
        include: [
          Personas, 
          { model: Paises, include: [Continentes] },
        ],
      });

      if (pasaportesPorPersona.length === 0) {
        return res.status(404).send({ message: 'No se encontraron pasaportes para esta persona.' });
      }

      return res.status(200).send(pasaportesPorPersona);
    } catch (error) {
      console.error('Error al buscar pasaportes por persona:', error);
      return res.status(500).send({ message: 'Error al buscar pasaportes por persona.', error });
    }
  },

  // * Encontrar pasaportes por país
  async findByPais(req, res) {
    const { paisId } = req.params;
    try {
      const pasaportesPorPais = await Pasaportes.findAll({
        where: { paisId }, 
        include: [
          Personas,
          { model: Paises, include: [Continentes] }, 
        ],
      });

      if (pasaportesPorPais.length === 0) {
        return res.status(404).send({ message: 'No se encontraron pasaportes para este país.' });
      }

      return res.status(200).send(pasaportesPorPais);
    } catch (error) {
      console.error('Error al buscar pasaportes por país:', error);
      return res.status(500).send({ message: 'Error al buscar pasaportes por país.', error });
    }
  },

  // * Encontrar pasaportes por continente
  async findByContinente(req, res) {
    const { continenteId } = req.params;
    try {
      const pasaportesPorContinente = await Pasaportes.findAll({
        include: [
          Personas, 
          {
            model: Paises,
            include: [
              { model: Continentes, where: { idContinentes: continenteId } },
            ],
          },
        ],
      });

      if (pasaportesPorContinente.length === 0) {
        return res.status(404).send({ message: 'No se encontraron pasaportes para este continente.' });
      }

      return res.status(200).send(pasaportesPorContinente);
    } catch (error) {
      console.error('Error al buscar pasaportes por continente:', error);
      return res.status(500).send({ message: 'Error al buscar pasaportes por continente.', error });
    }
  },
};
