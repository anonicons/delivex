const schema = require('mongoose').Schema
const mongoose = require('mongoose')

const ShipmentSchema = new schema({
    trackcode:{
        type:String,
        required:true,
        unique:true
    },
    client:{
        type:String,
        required:true
    },
    products:{
        type:String,
        required:true
    },
    origin:{
        type:String,
        required:true
    },
    final:{
        type:String,
        required:true
    }}
    ,{
        timestamps:true,
    })

const ShipmentModel = mongoose.model("shipment",ShipmentSchema)

module.exports = ShipmentModel;
// shipment