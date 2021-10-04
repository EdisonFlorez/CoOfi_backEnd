import mongoose from "mongoose";
const Schema = mongoose.Schema;


const user_schema= new Schema({
    name : String,
    last_name : String,
    user : String,
    password :  String,
    identification : String,
    contact_number : String,

});

const User = mongoose.model("User", user_schema);
export default User;