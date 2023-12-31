import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import TopRedirectButtonTemplate from "../templates/TopredirectbuttonTemplate";
import FooterTemplate from "../templates/FooterTemplate";

export default function NotfoundPage() {
  return (
    <div className="fade-in" data-testid="notfound">
      <div className="flex flex-col items-center justify-center text-center h-screen">
        <span className="max-w-md px-10">
          <img src="/logo192.png" alt="Weather App Logo" />
        </span>
        <span className="text-5xl font-bold text-black mb-4">404 - Page Not Found :(</span>
        <span className="text-xl text-black mb-4">Sorry, we could not find the page you are looking for.</span>
        <Link to="/">
          <button type="button" className="bg-black text-white font-bold max-w-[200px] px-4 py-2 mt-5 rounded-lg"><FontAwesomeIcon icon={faArrowLeft} /> Go back home</button>
        </Link>
      </div>
      <TopRedirectButtonTemplate />
      <FooterTemplate />
    </div>
  );
}
