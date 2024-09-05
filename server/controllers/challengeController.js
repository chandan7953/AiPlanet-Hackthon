// controllers/challengeController.js
import Challenge from "../models/Challenge.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../configs/cloudinaryConfig.js";

// Create challenge
const createChallenge = async (req, res) => {
  try {
    const { challengeName, startDate, endDate, description, levelType } =
      req.body;
    const image = req.file;

    if (
      !challengeName ||
      !startDate ||
      !endDate ||
      !description ||
      !levelType
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let imageUrl = "";
    if (image) {
      const result = await uploadToCloudinary(image.path);
      console.log(result);
      imageUrl = result;
    }

    const newChallenge = new Challenge({
      challengeName,
      startDate,
      endDate,
      description,
      image: imageUrl,
      levelType,
    });

    await newChallenge.save();
    res.status(201).json(newChallenge);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all challenges
const getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.status(200).json(challenges);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete challenge
const deleteChallenge = async (req, res) => {
  try {
    const { id } = req.params;

    const challenge = await Challenge.findById(id);
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    if (challenge.image) {
      const public_id = challenge.image.split("/").pop().split(".")[0];
      const cloudinaryResponse = await deleteFromCloudinary(public_id);
    }

    await Challenge.findByIdAndDelete(id);
    res.status(200).json({ message: "Challenge deleted successfully" });
  } catch (error) {
    console.error("Error deleting challenge:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update challenge
const updateChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const { challengeName, startDate, endDate, description, levelType } =
      req.body;
    const image = req.file;

    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    if (challengeName) challenge.challengeName = challengeName;
    if (startDate) challenge.startDate = startDate;
    if (endDate) challenge.endDate = endDate;
    if (description) challenge.description = description;
    if (levelType) challenge.levelType = levelType;

    if (image) {
      if (challenge.image) {
        const public_id = challenge.image.split("/").pop().split(".")[0];
        await deleteFromCloudinary(public_id);
      }

      const result = await uploadToCloudinary(image.path);
      challenge.image = result;
    }

    await challenge.save();
    res.status(200).json(challenge);
  } catch (error) {
    console.error("Error updating challenge:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getChallengeById = async (req, res) => {
  try {
    const { id } = req.params;

    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    res.status(200).json(challenge);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid challenge ID format" });
    }

    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export {
  createChallenge,
  getAllChallenges,
  deleteChallenge,
  updateChallenge,
  getChallengeById,
};
