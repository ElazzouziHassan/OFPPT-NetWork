import express from "express"

const router = express.Router();

router.get("/likes", (req, res) => {
  res.send('this route is for likes!')
});

export default router