import { deleteTask, updateTask } from "../services/taskService";

const TaskCard = ({ task, refresh }) => {
  const markComplete = async () => {
    await updateTask(task._id, { status: "completed" });
    refresh();
  };

  const remove = async () => {
    await deleteTask(task._id);
    refresh();
  };

  return (
   <div
  style={{
    background: "white",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  }}
>
  <h3 style={{ margin: 0 }}>{task.title}</h3>

  <p style={{ margin: "4px 0", color: "#555" }}>
    {task.description}
  </p>

  <span
    style={{
      fontWeight: "bold",
      color:
        task.status === "completed"
          ? "green"
          : task.status === "in-progress"
          ? "orange"
          : "#357ab8"
    }}
  >
    {task.status}
  </span>

  <div style={{ marginTop: "8px" }}>
    <button
      onClick={markComplete}
      style={{
        background: "#4a90e2",
        border: "none",
        padding: "6px 12px",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer",
        marginRight: "6px"
      }}
    >
      Complete
    </button>

    <button
      onClick={remove}
      style={{
        background: "#ff4d4d",
        border: "none",
        padding: "6px 12px",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer"
      }}
    >
      Delete
    </button>
  </div>
</div>

  );
};

export default TaskCard;
