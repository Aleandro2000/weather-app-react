import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import TopbarTemplate from "../templates/TopbarTemplate";
import FooterTemplate from "../templates/FooterTemplate";
import {
  celsiusToFahrenheit, displayToast, kelvinToCelsius, willRain,
} from "../utils/utils";
import SpinnerTemplate from "../templates/SpinnerTemplate";
import messages from "../utils/messages";
import TopRedirectButtonTemplate from "../templates/TopredirectbuttonTemplate";
import { TemperatureTypeContext } from "../contexts/temperature.context";

export default function HomePage() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);
  const [temperatureType] = useContext(TemperatureTypeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { location } = event.target;
    if (location.value) {
      setLoading(true);
      axios.get(`${process.env.REACT_APP_API_URL}/data/2.5/weather?q=${location.value}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(((response) => {
          setWeather(response.data);
          displayToast(messages.SUCCESSFULLY_TITLE_SEARCH, messages.ERROR_TEXT_SEARCH);
          setLoading(false);
        }))
        .catch((err) => {
          setWeather(null);
          displayToast(messages.ERROR_TITLE_SEARCH, err?.message || messages.ERROR_TEXT_SEARCH, false);
          setLoading(false);
        });
    } else {
      setWeather(null);
      displayToast(messages.REQUIRED_TITLE_SEARCH, messages.REQUIRED_TEXT_SEARCH, false);
    }
  };

  return (
    <div className="fade-in">
      <TopbarTemplate />
      <div className="text-3xl text-center font-bold max-w-lg mx-auto my-12 px-5">
        Write the location where you want to know the weather
      </div>
      <form onSubmit={handleSubmit} className="relative max-w-md mx-auto px-5">
        <input
          type="text"
          name="location"
          aria-label="Search Input for Weather"
          className="text-black p-5 pr-12 my-3 rounded-lg w-full border-2 border-gray-400 outline-none focus:border-black duration-300"
          placeholder="Write the location here..."
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute bottom-0 top-0 right-0 mr-12"
          aria-label="Search"
        >
          {loading ? <SpinnerTemplate /> : <FontAwesomeIcon icon={faSearch} />}
        </button>
      </form>
      {weather && (
        <div className="bg-gray-100 p-6 rounded-lg rounded-lg shadow-md max-w-3xl w-full mx-auto my-4 border-2 border-gray-200">
          <div className="text-2xl font-semibold mb-2">{weather.name}</div>
          <div className="text-gray-600">{weather.weather[0].description}</div>
          <div className="flex items-center mt-4">
            <img
              className="mr-2"
              src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />
            {
              !temperatureType || temperatureType === "celsius" ? (
                <div className="text-lg">{(kelvinToCelsius(weather.main.temp)).toFixed(2)} °C</div>
              ) : (
                <div className="text-lg">{(celsiusToFahrenheit(kelvinToCelsius(weather.main.temp))).toFixed(2)} °F</div>
              )
            }
          </div>
          <div>Humidity: {weather.main.humidity}%</div>
          <div>Wind Speed: {weather.wind.speed} m/s</div>
          {willRain(weather) && <div className="font-bold text-red-500 my-5">It will rain!</div>}
          {!willRain(weather) && <div className="font-bold my-5">No rain expected.</div>}
        </div>
      )}
      <TopRedirectButtonTemplate />
      <FooterTemplate />
    </div>
  );
}
