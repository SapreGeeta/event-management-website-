import express from "express";
import { sendMessage, deleteMessage, sendReview, getReviews } from "../controller/messageController.js";
const router = express.Router();

router.post("/send", sendMessage);
router.delete("/delete/:id", deleteMessage);
router.post("/review", sendReview);
router.get("/review", getReviews);

export default router;