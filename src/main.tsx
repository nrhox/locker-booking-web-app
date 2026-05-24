import { router } from "@/routes/router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import ReduxProvider from "./stores/ReduxProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <RouterProvider router={router} />
    </ReduxProvider>
  </StrictMode>,
);
