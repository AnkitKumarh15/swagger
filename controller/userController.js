const UModel = require('../models/userModel')
const {body, validationResult} = require('express-validator')

const getData = async(req,res)=>{
    try{
        const data = await UModel.find();
        res.status(200).send("Learning swagger");
    }
    catch(err){
        res.status(500).send(err.message)
    }
};


const postData = async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array() })
    }
    // const {name, company, price} = req.body;
    const data = req.body;
    try{
        const result = await UModel.create(data);
        res.status(200).send("Data Inserted Successfully");
    }
    catch(err){
        res.status(500).send(err.message)
    }
};

// This is also correct, working for postman but not working for swagger., Also its not a good practice

// const postData = async(req,res)=>{
//     try{
//         const data = req.body;
//         const result = await UModel.create(data)
//         res.status(200).send("Data inserted successfully");
//     }
//     catch(err){
//         res.status(500).send(err.message);
//     }
// }

const visualize = async(req,res)=>{
    try{
        res.status(200).send("This is testing for Swagger");
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = {getData, postData, visualize};
