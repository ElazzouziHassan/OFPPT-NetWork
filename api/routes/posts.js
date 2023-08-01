import express from "express"
import { addPost, deletePost, getPosts,  } from "../controllers/post.js";

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts", addPost);
router.get("/posts", deletePost);


export default router