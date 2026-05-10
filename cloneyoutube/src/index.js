import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

dotenv.config({
    path: './.env'
})

    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            console.log("Connecterd");
            
        } catch (error) {
            console.log("Error", error);
            throw error

        }
    })()



console.log("Index file is Called");
console.log(process.env.MONGODB_URL);

