import express from "express"
import { getUser , updateUser} from "../controllers/user.js";
const router = express.Router();

router.get("/users/:userId", getUser);
router.get("/users", updateUser);

export default router
