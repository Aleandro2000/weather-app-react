import React, { useContext } from "react";
import { WeatherContext } from "../contexts/weather.context";
import TopbarTemplate from "../templates/TopbarTemplate";
import FooterTemplate from "../templates/FooterTemplate";

export default function HomePage() {
  const [weather, setWeather] = useContext(WeatherContext);

  const handleSubmit = () => [weather, setWeather];
  handleSubmit();

  return (
    <div className="fade-in">
      <TopbarTemplate />
      <FooterTemplate />
    </div>
  );
}
