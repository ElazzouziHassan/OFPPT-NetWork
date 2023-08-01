import express from "express";
import dotenv from 'dotenv'

dotenv.config()
const app = express(); const PORT = process.env.HTTP_SERVER_PORT;


app.listen(PORT, () => {
  console.log("API working!");
});