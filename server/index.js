import express from "express";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
const port = process.env.port;

import connectDB from "./database/connectdb.js";

import cookieParser from "cookie-parser";
app.use(cookieParser());

import registerRoutes from "./routes/registerRoutes.js";
app.use("/api/register", registerRoutes);

import loginRoutes from "./routes/loginRoutes.js";
app.use("/api/login", loginRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`server is running on port ${port} `);
});
