import express  from "express";
import dotenv from 'dotenv';
import mysqlConnection from "./db/db.connection";
import userRouter from './src/User/user.route'
const app = express();

dotenv.config()

const port = process.env.PORT || 5006;
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

const startApp = async () => {
    try {

        const dbConnection = await mysqlConnection.initialize();;
        console.log("Database connected:", dbConnection.isInitialized);

        app.get('/',(req,res)=>{
            res.send("hello");
        })
        app.use('/user',userRouter());

        app.listen(port,()=>{
            console.log(`server running on port ${port}`);
        })
    } catch (err) {
        console.error("Failed to start application due to DB error:", err);
        process.exit(1); // Exit the application on failure
    }
};

startApp();