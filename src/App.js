import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotfoundPage from "./pages/NotfoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "*",
    Component: NotfoundPage,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
