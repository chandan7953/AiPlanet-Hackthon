import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import challengeRoutes from "./routes/challengeRoutes.js";
import connectDB from "./configs/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", challengeRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
