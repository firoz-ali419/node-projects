import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDb=async()=>{
    try {
         const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
         console.log(connectionInstance.connection.host);
         console.log("MONGODB connect Successfully");
               
    } catch (error) {
          console.log("Mongodb Connection Error",error);
          throw error
          
    }
}

export default connectDb