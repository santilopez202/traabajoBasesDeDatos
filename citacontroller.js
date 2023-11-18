require('express');
const cita = require('../models/cita');

//create cita

async function listCita(req, res) {
    try{
        await cita.findAll({
            attributes: [
                'id_cita',
                'fecha',
                'id_paciente_1',
                'id_medico_1',
            ],
            order: ['id_cita']
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
async function crearCita(req,res){
    try{
        await cita.create({
            id_cita: req.body.id_cita,
            fecha: req.body.fecha,
            id_paciente_1: req.body.id_paciente_1,
            id_medico_1: req.body.id_medico_1,
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

  async function actualizarCita(req, res){
    try{
        await cita.update({
            id_cita: req.body.id_cita,
            fecha: req.body.fecha,
            id_paciente_1: req.body.id_paciente_1,
            id_medico_1: req.body.id_medico_1,
        },{
            where: {id_cita: req.params.id_cita}
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
  async function desactivarCita(req, res){
    try{
        await cita.destroy({
            where: {id_cita: req.params.id_cita}
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
    listCita, crearCita, actualizarCita, desactivarCita
}