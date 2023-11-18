const express = require('express');
const router = express.Router();
const citacontroller = require ('../controller/citacontroller');

router.post('/crearCita',citacontroller.crearCita);
router.get('/listCita',citacontroller.listCita);
router.put('/actualizarCita',citacontroller.actualizarCita);
router.delete('/desactivarCita',citacontroller.desactivarCita);

module.exports = router;