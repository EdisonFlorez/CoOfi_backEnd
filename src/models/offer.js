import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const offer_schema = new Schema({
    title: String,
    description: String,
    requirements: String,
    salary: String,
    location: String,
    date: {type: Date, default: Date.now},
    image: String,
});

const Offer = mongoose.model("Offer", offer_schema);
export default Offer;