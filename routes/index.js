const { Router } = require('express');
const router = Router();
const pasaportesController = require('../controllers/pasaportesController');

module.exports = (app) => {

    router.get('/pasaportes', pasaportesController.find);
    router.post('/pasaportes/:id', pasaportesController.findById);
    router.post('/pasaportes/persona', pasaportesController.findByPersona);
    router.post('/pasaportes/:paisId', pasaportesController.findByPais);
    router.post('/pasaportes/:continenteId', pasaportesController.findByContinente);

    app.use('/', router);

};