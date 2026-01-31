import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";
import "./assets/styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </StrictMode>
);

