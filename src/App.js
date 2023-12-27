import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotfoundPage from "./pages/NotfoundPage";
import { TemperatureTypeContext } from "./contexts/temperature.context";

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
  const [temperatureType, setTemperatureType] = useState();

  return (
    <TemperatureTypeContext.Provider value={[temperatureType, setTemperatureType]}>
      <RouterProvider router={router} />
    </TemperatureTypeContext.Provider>
  );
}
