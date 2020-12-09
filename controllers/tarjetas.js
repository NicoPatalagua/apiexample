const { response } = require("express");
const path = require("path");
const models = require(path.join(__dirname, "..", "models", "index"));
const controller = {};
controller.obtenerTarjetas=async(req, res, next) => {
    try {
        const tarjetas= await models.tarjetas.findAll();
        res.status(200).json({data:tarjetas})
    } catch (error) {
        res.status(400).json({data:error})
    }
}
controller.obtenerTarjeta=async(req, res, next) => {
    try {
        const tarjetas= await models.tarjetas.findOne({where:{numeroTarjeta: req.params.numeroTarjeta}});
        res.status(200).json({data:tarjetas})
    } catch (error) {
        res.status(400).json({data:error})
    }
}
controller.crearTarjeta=async(req, res, next) => {
    try {
        const tarjetas= await models.tarjetas.create(req.body.data);
        res.status(200).json({data:tarjetas})
    } catch (error) {
        res.status(400).json({data:error})
    }
}
controller.eliminarTarjeta=async(req, res, next) => {
    try {
        const tarjetas= await models.tarjetas.findOne({where:{numeroTarjeta: req.params.numeroTarjeta}});
        await tarjetas.destroy();
        res.status(200).json({data:"Se ha eliminado correctamente"})
    } catch (error) {
        res.status(400).json({data:error})
    }
}
controller.actualizarTarjeta=async(req, res, next) => {
    try {
        const tarjetas= await models.tarjetas.findOne({where:{numeroTarjeta: req.params.numeroTarjeta}});
        const tarjetaModificada= await tarjetas.update(req.body.data);
        res.status(200).json({data:tarjetaModificada})
    } catch (error) {
        res.status(400).json({data:error})
    }
}
module.exports = controller;