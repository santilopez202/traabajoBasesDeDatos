const express = require('express');
const router = express.Router();
const medicocontroller = require ('../controller/medicocontroller');

router.post('/crearMedico',medicocontroller.crearMedico);
router.get('/listMedico',medicocontroller.listMedico);
router.put('/actualizarMedico',medicocontroller.actualizarMedico);
router.delete('/desactivarMedico',medicocontroller.desactivarMedico);

module.exports = router;