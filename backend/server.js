import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:",err));

app.listen(5000, () => console.log("Server running on port 5000"));
