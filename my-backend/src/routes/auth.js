import express from "express";
import {
  register,
  login,
  deleteAccount,
} from "../controllers/authController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.delete("/delete", auth, deleteAccount);

export default router;
