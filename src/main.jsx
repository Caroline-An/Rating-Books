import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Certifique-se de que o caminho do CSS esteja correto
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
