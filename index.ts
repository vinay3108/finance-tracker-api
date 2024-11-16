import express  from "express";
import dotenv from 'dotenv';
import {connectMySql} from "./db/db.connection";
const app = express();

dotenv.config()

const port = process.env.PORT || 5006;
const startApp = async () => {
    try {

        const dbConnection = await connectMySql();
        console.log("Database connected:", dbConnection.isInitialized);

        app.get('/',(req,res)=>{
            res.send("hello");
        })

        app.listen(port,()=>{
            console.log(`server running on port ${port}`);
        })
    } catch (err) {
        console.error("Failed to start application due to DB error:", err);
        process.exit(1); // Exit the application on failure
    }
};

startApp();