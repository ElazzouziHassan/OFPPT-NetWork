import express from "express"
import { addLike, getLikes, removeLike, } from "../controllers/like.js";
const router = express.Router();

router.get("/", getLikes);
router.get("/", addLike);
router.get("/", removeLike);

export default router