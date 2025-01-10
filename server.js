import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "build", ))
})

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
});