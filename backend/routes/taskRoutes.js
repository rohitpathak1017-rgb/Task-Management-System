import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";
import { taskValidation } from "../utils/validators.js";

const router = express.Router();

router.route("/")
  .post(protect, taskValidation, createTask)
  .get(protect, getTasks);

router.route("/:id")
  .put(protect, updateTask)
  .delete(protect, deleteTask);

export default router;
