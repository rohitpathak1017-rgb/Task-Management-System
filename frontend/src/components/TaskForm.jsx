import { useState } from "react";
import { createTask } from "../services/taskService";

const TaskForm = ({ refresh }) => {
  const [task, setTask] = useState({ title: "", description: "", status: "pending" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(task);
    setTask({ title: "", description: "", status: "pending" });
    refresh();
  };

  return (
    <div>
   <form
  onSubmit={handleSubmit}
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }}
>
  <input
    placeholder="Title"
    value={task.title}
    onChange={(e) => setTask({ ...task, title: e.target.value })}
    style={{
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px"
    }}
  />

  <input
    placeholder="Description"
    value={task.description}
    onChange={(e) => setTask({ ...task, description: e.target.value })}
    style={{
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px"
    }}
  />

  <select
    value={task.status}
    onChange={(e) => setTask({ ...task, status: e.target.value })}
    style={{
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px",
      cursor: "pointer"
    }}
  >
    <option value="pending">Pending</option>
    <option value="in-progress">In Progress</option>
    <option value="completed">Completed</option>
  </select>

  <button
    style={{
      background: "#4a90e2",
      border: "none",
      padding: "8px",
      borderRadius: "6px",
      color: "white",
      cursor: "pointer",
      fontWeight: "500"
    }}
  >
    Add Task
  </button>
</form>
</div>
  );
};

export default TaskForm;
