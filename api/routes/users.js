import express from "express"

const router = express.Router();

router.get("/users", (req, res) => {
  res.send('this route is for users!')
});

export default router
