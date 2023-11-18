require('express');
const medico = require('../models/medico');

//create citas

async function listMedico(req, res) {
    try{
        await listMedico.findAll({
            attributes: [
                'id_medico_1',
                'nombre',
                'apellido',
                'especialidad',
            ],
            order: ['nombre']
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
async function crearMedico(req,res){
    try{
        await crearMedico.create({
            id_medico_1: req.body.id_medico_1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            especialidad: req.body.especialidad,     
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

  async function actualizarMedico(req, res){
    try{
        await actualizarMedico.update({
            id_medico_1: req.body.id_medico_1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            especialidad: req.body.especialidad,
            },{
            where: {id_medico_1: req.params.id_medico_1}
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
  async function desactivarMedico(req, res){
    try{
        await desactivarMedico.destroy({
            where: {id_medico_1: req.params.id_medico_1}
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
    listMedico, actualizarMedico, desactivarMedico, crearMedico
}