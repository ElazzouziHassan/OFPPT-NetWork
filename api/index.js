import express from "express";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import likeRoutes from "./routes/likes.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";

import dotenv from 'dotenv'

dotenv.config()

const app = express(); const PORT = process.env.HTTP_SERVER_PORT;

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/comments", commentRoutes)

app.listen(PORT, () => {
  console.log(`Server running on:  http://localhost:${PORT}/`)
})