var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import dotenv from 'dotenv';
import { connectMySql } from "./db/db.connection";
const app = express();
dotenv.config();
const port = process.env.PORT || 5006;
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbConnection = yield connectMySql();
        console.log("Database connected:", dbConnection.isInitialized);
        app.get('/', (req, res) => {
            res.send("hello");
        });
        app.listen(port, () => {
            console.log(`server running on port ${port}`);
        });
    }
    catch (err) {
        console.error("Failed to start application due to DB error:", err);
        process.exit(1); // Exit the application on failure
    }
});
startApp();
