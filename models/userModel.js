const mongoose = require('mongoose')

const USchema = new mongoose.Schema({
    name : {type:String, required:true},
    company: {type:String},
    price: {type:Number, required: true}
})

const UModel = mongoose.model('stocks', USchema);

module.exports = UModel;