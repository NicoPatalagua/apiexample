const { response } = require("express");
const path = require("path");
const models = require(path.join(__dirname, "..", "models", "index"));
const controller = {};
controller.obtenerPersonas=async(req, res, next) => {
    try {
        const personas=await models.Personas.findAll();
        res.status(200).json({data:personas})
    } catch (error) {
        res.status(400).json({data:error})
    }
}
controller.obtenerPersona=async(req, res, next) => {
    try {
        const personas= await models.Personas.findOne({where:{idPersona: req.params.idPersona}});
        res.status(200).json({data:personas})
    } catch (error) {
        res.status(400).json({data:error})
    }
}
controller.crearPersona=async(req, res, next) => {
    try {
        const personas= await models.Personas.create(req.body.data);
        res.status(200).json({data:personas})
    } catch (error) {
        console.log(error);
        res.status(400).json({data:error})
    }
}
controller.eliminarPersona=async(req, res, next) => {
    try {
        const personas= await models.Personas.findOne({where:{idPersona: req.params.idPersona}});
        await personas.destroy();
        res.status(200).json({data:"Se ha eliminado correctamente"})
    } catch (error) {
        res.status(400).json({data:error})
    }
}
controller.actualizarPersona=async(req, res, next) => {
    try {
        const personas= await models.Personas.findOne({where:{idPersona: req.params.idPersona}});
        const personaModificada= await personas.update(req.body.data);
        res.status(200).json({data:personaModificada})
    } catch (error) {
        res.status(400).json({data:error})
    }
}
module.exports = controller;