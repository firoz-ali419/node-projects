import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: './.env'
})



connectDb().then(()=>{
  app.listen(process.env.PORT,()=>console.log(`Server is Running at Port : https://${process.env.PORT}`)
  )
}).catch((error)=>{
    console.log("MongodbConnection Failed ",error);
    
})


