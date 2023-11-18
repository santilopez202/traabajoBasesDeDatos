require('express');
const factura = require('../models/factura');

//create clientes

async function listFacturas(req, res) {
    try{
        await factura.findAll({
            attributes: [
                'id_factura',
                'id_paciente',
                'fecha_emision',
                'monto',
                'descripcion',
            ],
            order: ['id_factura']
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(500).json({
                error: error 
            });
    
        })
    }catch(e){
        console.log(e);
    }
}
async function crearFactura(req,res){
    try{
        await factura.create({
            id_factura: req.body.id_factura,
            id_paciente: req.body.id_paciente,
          fecha_emision: req.body.fecha_emision,
          monto: req.body.monto,
          descripcion: req.body.descripcion,
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
  }

  async function actualizarFactura(req, res){
    try{
        await factura.update({
            id_factura: req.body.id_factura,
            id_paciente: req.body.id_paciente,
          fecha_emision: req.body.fecha_emision,
          monto: req.body.monto,
          descripcion: req.body.descripcion,
        },{
            where: {id_factura: req.params.id_factura}
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
  }
  async function desactivarFactura(req, res){
    try{
        await factura.destroy({
            where: {id_factura: req.params.id_factura}
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
  }

module.exports = {
    listFacturas, actualizarFactura, desactivarFactura, crearFactura
}