import express from "express";
import path from "path";
import dotenv from "dotenv";
//import { connectDB } from "./backend/config/db.js";

import productRoutes from "./backend/routes/product.routes.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json()) // This line is very important since it allows the apis to accept json data in the request body

app.use("/api/products", productRoutes);

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "build", ))
});

app.listen(PORT, ()=>{
    //connectDB();
    console.log(`Server started at http://localhost:${PORT}`)
});