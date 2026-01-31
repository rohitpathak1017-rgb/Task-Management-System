import Task from "../models/Task.js";
import { validationResult } from "express-validator";

export const createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { title, description, status } = req.body;

  const task = await Task.create({
    title,
    description,
    status,
    user: req.user._id
  });

  res.status(201).json(task);
};

export const getTasks = async (req, res) => {
  try {
    const filter = { user: req.user._id };

    // Status filter (existing)
    if (req.query.status) {
      filter.status = req.query.status;
    }

    // Pagination values
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    // Total tasks count
    const totalTasks = await Task.countDocuments(filter);

    const tasks = await Task.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      tasks,
      currentPage: page,
      totalPages: Math.ceil(totalTasks / limit),
      totalTasks
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (task.user.toString() !== req.user._id.toString())
    return res.status(401).json({ message: "Not authorized" });

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.status = req.body.status || task.status;

  const updated = await task.save();
  res.json(updated);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (task.user.toString() !== req.user._id.toString())
    return res.status(401).json({ message: "Not authorized" });

  await task.deleteOne();
  res.json({ message: "Task removed" });
};
