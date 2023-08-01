import express from "express"

const router = express.Router();

router.get("/auth", (req, res) => {
  res.send('this route is for authentication!')
});

export default router