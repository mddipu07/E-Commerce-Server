import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
     userId:{type:String,requied:true},
     firstName:{type:String,requied:true},
     lastName:{type:String,requied:true},
     email:{type:String,requied:true},
     street:{type:String,requied:true},
     city:{type:String,requied:true},
     state:{type:String,requied:true},
     zipcode:{type:Number,requied:true},
     country:{type:String,requied:true},
     phone:{type:String,requied:true},

})

const Address = mongoose.models.address || mongoose.model('address', addressSchema)
export default Address