import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
export default async function connectdb(){
    try{
        if(!MONGODB_URI){
            throw new error("MONGODB_URI is not connected");
        }
         if(mongoose.connection.readyState === 1){
            console.log("Mongodb is already connected");
            return;
         }
         await mongoose.connect(MONGODB_URI);
         console.log("Mongodb Connected");
    }catch(error){
   console.log("Database Error", error)
   throw error;
    }
}