import express from "express";
import { body } from "express-validator";
import { registerUser, loginUser,logoutUser } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js"; 
const router = express.Router();

// REGISTER
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  registerUser
);

// LOGIN
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  loginUser
);
// LOGOUT
router.post("/logout", protect, logoutUser);
export default router;
