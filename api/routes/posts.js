import express from "express"

const router = express.Router();

router.get("/posts", (req, res) => {
  res.send('this route is for posts!')
});

export default router