import API from "./api";

export const getTasks = (page = 1, status = "") =>
  API.get(`/tasks?page=${page}&limit=5${status ? `&status=${status}` : ""}`);

export const createTask = (data) => API.post("/tasks", data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
