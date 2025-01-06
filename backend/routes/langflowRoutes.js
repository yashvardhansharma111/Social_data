import express from "express";
import { runFlow } from "../controllers/langflowController.js";

const router = express.Router();

router.post("/run", runFlow);

export default router;
