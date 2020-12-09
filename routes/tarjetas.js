var express = require('express');
var router = express.Router();
const path = require("path");
const controller = require(path.join(__dirname,"..","controllers","tarjetas"));
router.get("/",controller.obtenerTarjetas);
router.get("/:numeroTarjeta",controller.obtenerTarjeta);
router.post("/",controller.crearTarjeta);
router.delete("/:numeroTarjeta",controller.eliminarTarjeta);
router.put("/:numeroTarjeta",controller.actualizarTarjeta);
module.exports = router;

