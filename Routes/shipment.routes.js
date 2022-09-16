const router = require('express').Router()
const shipmentController = require('../controllers/shipment.controller')
const ShipmentController = require('../controllers/shipment.controller')


router.get('/',ShipmentController.getAllShipments)

router.post('/add',ShipmentController.addShipment)


router.get('/:id',ShipmentController.getById)

router.delete('/:id', ShipmentController.deleteShipment)

router.post('/track',shipmentController.getShipmentByTrackNumber)


module.exports = router