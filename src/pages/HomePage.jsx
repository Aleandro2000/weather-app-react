import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import TopbarTemplate from "../templates/TopbarTemplate";
import FooterTemplate from "../templates/FooterTemplate";
import { displayToast } from "../utils/utils";
import SpinnerTemplate from "../templates/SpinnerTemplate";
import messages from "../utils/messages";

export default function HomePage() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { location } = event.target;
    if (location.value) {
      setLoading(true);
      axios.get(`${process.env.REACT_APP_API_URL}/data/2.5/weather?q=${location.value}&appid=${REACT_APP_API_KEY}`)
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
      <div className="text-3xl text-center font-bold max-w-md mx-auto my-12">
        Write the location where you want to know the weather
      </div>
      <form onSubmit={handleSubmit} className="relative max-w-sm mx-auto">
        <input
          type="text"
          name="commercial_names"
          className="text-black p-5 pr-12 my-3 rounded-lg w-full border-2 border-gray-400 outline-none focus:border-black duration-300"
          placeholder="Write the location here..."
        />
        <button
          type="submit"
          name="location"
          disabled={loading}
          className="absolute bottom-0 top-0 right-0 mr-5"
          aria-label="Search"
        >
          {loading ? <SpinnerTemplate /> : <FontAwesomeIcon icon={faSearch} />}
        </button>
      </form>
      {JSON.stringify(weather)}
      <FooterTemplate />
    </div>
  );
}
