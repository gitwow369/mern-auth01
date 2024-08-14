import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is Runnig your First Auth Project in PORT:3000");
});

app.get("/", (req, res) => {
  res.json({
    message: "API is Working Yo",
  });
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// KLmBlNcdQEqCIclL
// franklinyoutx
//mernwow
//123456Mern
