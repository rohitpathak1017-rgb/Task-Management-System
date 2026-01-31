/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, useCallback } from "react";
import { getTasks } from "../services/taskService";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";

import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState("");

 
  

  
  const fetchTasks = useCallback(async () => {
    const res = await getTasks(page, status);
    setTasks(res.data.tasks);
    setTotalPages(res.data.totalPages);
  }, [page, status]);

  useEffect(() => {
    
    fetchTasks();
  }, [fetchTasks]);

  return (

   <div
  style={{
    background: "#f4f6f9",
    minHeight: "100vh"
  }}
>
  <Navbar />

  <div
    style={{
      maxWidth: "900px",
      margin: "20px auto",
      padding: "0 15px",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }}
  >
    <FilterBar setStatus={setStatus} />
    <TaskForm refresh={fetchTasks} />

    {tasks.map((task) => (
      <TaskCard key={task._id} task={task} refresh={fetchTasks} />
    ))}

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "10px"
      }}
    >
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
        style={{
          padding: "6px 12px",
          borderRadius: "5px",
          border: "none",
          background: "#4a90e2",
          color: "white",
          cursor: "pointer"
        }}
      >
        Prev
      </button>

      <span style={{ fontWeight: "500" }}>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage((p) => p + 1)}
        style={{
          padding: "6px 12px",
          borderRadius: "5px",
          border: "none",
          background: "#4a90e2",
          color: "white",
          cursor: "pointer"
        }}
      >
        Next
      </button>
    </div>
  </div>
</div>

  );
};

export default Dashboard;
