require('express');
const historia_clinica = require('../models/historia_clinica');

//create historiaCliniva

async function listHistoria_clinica(req, res) {
    try{
        await historia_clinica.findAll({
            attributes: [
                'id_historia',
                'id_paciente',
                'fecha_creacion',
                'descripcion',
                'diagnostico',
                'tratamiento',
            ],
            order: ['id_historia']
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
async function crearHistoria_Clinica(req,res){
    try{
        await crearHistoria_Clinica.create({
            id_historia: req.body.id_historia,
            id_paciente: req.body.id_paciente,
            fecha_creacion: req.body.fecha_creacion,
            descripcion: req.body.descripcion,
            diagnostico: req.body.diagnostico,
            tratamiento: req.body.tratamiento,
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

  async function actualizarHistoria_clinica(req, res){
    try{
        await actualizarHistoria_clinica.update({
            id_historia: req.body.id_historia,
            id_paciente: req.body.id_paciente,
            fecha_creacion: req.body.fecha_creacion,
            descripcion: req.body.descripcion,
            diagnostico: req.body.diagnostico,
            tratamiento: req.body.tratamiento,
        },{
            where: {id_historia: req.params.id_historia}
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
  async function desactivarhistoria_clinica(req, res){
    try{
        await desactivarhistoria_clinica.destroy({
            where: {id_historia: req.params.id_historia}
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
    listHistoria_clinica, actualizarHistoria_clinica, desactivarhistoria_clinica, crearHistoria_Clinica
}