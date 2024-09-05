import express from "express";
import {
  createChallenge,
  getAllChallenges,
  deleteChallenge,
  updateChallenge,
  getChallengeById,
} from "../controllers/challengeController.js";
import { upload } from "../configs/cloudinaryConfig.js";

const router = express.Router();

router.post("/challenges", upload.single("image"), createChallenge);
router.get("/challenges", getAllChallenges);
router.get("/challenges/:id", getChallengeById);
router.delete("/challenges/:id", deleteChallenge);
router.put("/challenges/:id", upload.single("image"), updateChallenge);

export default router;
