const mongoose = require('mongoose')
const dbConnection = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/e-comm2');
        console.log("DB connected successfully")
    }
    catch(err){
        console.log('error occurs', err.message);
        process.exit(1); // exit with failure status
    }
};

module.exports = dbConnection;
