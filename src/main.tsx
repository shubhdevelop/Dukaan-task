import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";
import Dashboard from "./components/Dashboard/Dashboard.tsx";
import AllCatchRoute from "./components/AllCatchRoute.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/payments" element={<Dashboard />} />
      <Route path="*" element={<AllCatchRoute />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
