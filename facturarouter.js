const express = require('express');
const router = express.Router();
const facturacontroller = require ('../controller/facturacontroller');

router.post('/crearFactura',facturacontroller.crearFactura);
router.get('/listFactura',facturacontroller.listFacturas);
router.put('/actualizarFactura',facturacontroller.actualizarFactura);
router.delete('/desactivarFactura',facturacontroller.desactivarFactura);

module.exports = router;