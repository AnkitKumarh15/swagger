const express = require('express')
const UModel = require('../models/userModel')

const getData = async(req,res)=>{
    try{
        const data = await UModel.find();
        console.log(data);
        res.status(200).send("Learning swagger");
    }
    catch(err){
        res.status(500).send(err.message)
    }
};

const postData = async(req,res)=>{
    try{
        const newdata = req.body;
        const result = await UModel.create(newdata);
        console.log(newdata);
        res.status(200).send("Data Inserted");
    }
    catch(err){
        res.status(500).send(err.message)
    }
};

module.exports = {getData, postData};
