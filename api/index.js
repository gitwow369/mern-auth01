import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(3000, () => {
  console.log("Server is Runnig your First Auth Project in PORT:3000");
});
// KLmBlNcdQEqCIclL
// franklinyoutx
//mernwow
//123456Mern
