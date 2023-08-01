import express from "express"
import {addComment, deleteComment, getComments, updateComment, } from "../controllers/comment.js";
const router = express.Router();

router.get("/", getComments);
router.get("/", addComment);
router.get("/:id", deleteComment);
router.get("/:id", updateComment);

export default router