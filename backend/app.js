import express from "express";
import langflowRoutes from "./routes/langflowRoutes.js";
import dbConnect from "./db/index.js";
import cors from 'cors';
const app = express();

app.use(cors({
  origin: "*",
  credentials: true 
}));

// Middleware
app.use(express.json());
app.use("/api/langflow", langflowRoutes);

// Connect to DB
dbConnect();

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
