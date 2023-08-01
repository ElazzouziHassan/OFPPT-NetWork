import express from "express"

const router = express.Router();

router.get("/comments", (req, res) => {
  res.send('this route is for comments!')
});

export default router