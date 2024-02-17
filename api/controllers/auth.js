import { db } from "../connection";

export const register = (req, res) => {
  
  // verify user existence !

  const q = "SELECT FROM users WHERE username = ?";

  db.query(q, [req.body.username], (error, data) => {
    
    if (error) return res.status(500).json(error);
    if (data.length) return res.status(409).json("user is already exists !");

  })


}

export const login = (req, res) => {
  // to do operation
}

export const logout = (req, res) => {
  // to do operation for logout
}