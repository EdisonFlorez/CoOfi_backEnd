const mongoose = require('mongoose');
const { Schema } = mongoose;

const  Offers = new Schema({
    title: String,
    description: String,
    nombreOfer: String,
    email: String,
    keyWords:String
});

module.exports = mongoose.model('Offers', Offers);