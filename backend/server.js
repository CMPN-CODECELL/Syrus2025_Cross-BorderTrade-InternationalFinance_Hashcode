import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import companyRoutes from "./routes/companyRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
// app.use(cors());

app.use("/api/companies", companyRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
