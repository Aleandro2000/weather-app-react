import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { WeatherContext } from "./contexts/weather.context";
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
  const [weather, setWeather] = useState();

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      <RouterProvider router={router} />
    </WeatherContext.Provider>
  );
}
