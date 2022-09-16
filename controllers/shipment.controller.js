const express = require('express')
const mongoose = require('mongoose')
const Shipment = require('../models/shipment.models')
const User = require('../models/user.models')




// get all the shipments in the database
const getAllShipments = async (req,res) => {

    let allShipments;


    try{
        allShipments = await Shipment.find();
    }
    catch(err){
        console.log(err)
        res.status(404).json({message:"Cant get Shipments"})
    }

    res.status(200).json(allShipments)
}

// add to the shipments in the database
const addShipment =  async (req,res) => {

    let existingShipment;
    
    const {trackcode,client,products,origin,final} = req.body;

    try{
        existingShipment = await Shipment.findOne({trackcode})
    }

    catch(err){
        console.log(err)
    }
   if(existingShipment){res.status(400).json({message:"Shipment exists"})}


// an instance of the shipment
    const newShipment =  new Shipment(
        {trackcode,client,products,origin,final} 
    );
    
   await newShipment.save()
let allShipments;
   try{
    allShipments = await Shipment.find()
   }
   catch(err){
    console.log(err)
   }

    res.status(200).json(allShipments)
   
}

// update blog in the database

const updateShipment = async (req,res) => {
    const id = req.params.id;
    const {trackcode,client,products,origin,final} = req.body
    
    let shipment ;

    try{
        shipment = await Shipment.findByIdAndUpdate(id,{trackcode,client,products,origin,final})
    }
    catch(err){
        console.log(err)
    }

    if(!shipment)res.status(404).json("Cant find shipment to update")

    res.status(200).json({message:"Update ok"})

}

// get a shipment by its id

const getById = async (req,res) => {
    const id = req.params.id
    let shipment;

    try{
        shipment = await Shipment.findById(id)
    }
    catch(err){
    console.log(err)
    }

    if(!shipment)res.status(404).json("Cant find shipment!")

    res.status(200).json(shipment)
    }

    // delete blog from the database

    const deleteShipment = async (req,res) => {
        const id = req.params.id
        let deleteBlogInProcess;
        let allShipments;
        try{
            deleteBlogInProcess = await Shipment.findByIdAndRemove(id)
            allShipments = await Shipment.find()
        }
        catch(err){
            console.log(err)
        }
        if(!deleteBlogInProcess)res.status(400).json({message:"Cant find shipment to delete"})

        res.status(200).json({message:"Delete Successful"})

    }
    // get shipment by trackcode number

    const getShipmentByTrackNumber = async (req,res) => {
      const {trackcode} = req.body;
      let existingShipment;
      try{
        existingShipment = await Shipment.findOne({trackcode})
      }
      catch(err){
        console.log(err)
      }
      if(!existingShipment){
        res.status(400).json({message:"Cant Find Shipment"})
      }
    res.status(200).json(existingShipment._id)
    }


module.exports = {
    getAllShipments:getAllShipments,addShipment:addShipment,updateShipment:updateShipment,getById:getById,deleteShipment:deleteShipment,
    getShipmentByTrackNumber:getShipmentByTrackNumber
}