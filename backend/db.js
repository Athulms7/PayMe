import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const databaseurl=process.env.MONGODB_URI

mongoose.connect(databaseurl).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Could not connect to MongoDB...",err)
});
const userschema = new mongoose.Schema({
    firstname:{
        type:String,
        reruire:true,
        trim:true

    },lastname:{
        type:String,
        require:true,
        trim:true
    },
    username:{
        type:String,
        require:true,
        trim:true,
        
    },password:{
        type:String,
        require:true,
        minLength:6

    }

   
    
})
 const balanceschema= new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },balance:{
        require:true,
        type:Number,
        default:0,
    }

}) 
export const User=mongoose.model("User",userschema);
export const Account=mongoose.model("Account",balanceschema);