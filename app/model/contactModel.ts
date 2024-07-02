import { Schema } from "mongoose";
import mongoose from "mongoose";

const contactSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:[3,"Name must be at least 3 characters long"],
        maxlength:[50,"Name must be at most 50 characters long"]
    },
    email:{
        type:String,
        required:true,
        match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,"Email is not valid"]
    },
    phone:{
        type:Number,
        required:true,
        match:[/[0-9]{10}/,"Phone number is not valid"],
        maxlength:[10,"Phone number is not valid"]
    },
    message:{
        type:String,
        required:true,
        minlenhgt:[5,"Message must be at least 5 characters long"],
        maxlength:[500,"Message must be at most 500 characters long"],
    }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export default Contact;