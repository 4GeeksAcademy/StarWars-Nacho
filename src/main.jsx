import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DataProvider } from "./hooks/useGlobalData";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./main.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} className="star-wars-text" />
    </DataProvider>
  </StrictMode>
);
