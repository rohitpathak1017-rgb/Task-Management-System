import { body } from "express-validator";

export const taskValidation = [
  body("title").notEmpty().withMessage("Title is required"),
  body("status")
    .optional()
    .isIn(["pending", "in-progress", "completed"])
    .withMessage("Invalid status")
];
