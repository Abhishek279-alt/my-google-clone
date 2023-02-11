import React from "react";
import GoogleColored from "../assets/google-colored-logo.png";
import GoogleDark from "../assets/google-dark-modified.png";
import searchIcon from "../assets/search-icon.png";
import microphone from "../assets/microphone.png";
import googleLens from "../assets/Google_Lens.png";
import "./body.css";

const Body = (props) => {
  let isDarkMode = props.darkMode;
  return (
    <div className="body-container d-flex flex-column">
      <div className="row mx-auto">
        <div>
          <img
            id="logo-colored"
            src={GoogleColored}
            alt="google-colored"
            style={isDarkMode ? { display: "none" } : { display: "block" }}
          />
          <img
            id="logo-dark"
            src={GoogleDark}
            alt="google-dark"
            style={{
              display: `${isDarkMode ? "block" : "none"}`,
            }}
          />
        </div>
      </div>
      <div
        className="row d-flex justify-content-center"
        style={{ margin: "30px 0px" }}
      >
        <div
          className="search-bar d-flex align-items-center"
          style={
            isDarkMode ? { borderColor: "#6b6b6b" } : { borderColor: "#C9C9C9" }
          }
        >
          <img
            className="me-1"
            src={searchIcon}
            alt="search-icon"
            style={{ height: "35%" }}
          />
          <input
            type="text"
            id="search-box"
            className={`me-2 ps-2 text-${isDarkMode ? "white" : "dark"}`}
          />
          <img
            src={microphone}
            alt="microphone"
            style={{ height: "62%", width: "4.3%" }}
            className="me-3"
          />
          <img src={googleLens} alt="google-lens" style={{ height: "45%" }} />
        </div>
      </div>
      <div className="row mx-auto">
        <button
          className="search-btn py-2 me-2"
          style={
            isDarkMode
              ? { backgroundColor: "#303134", color: "#e8eaed" }
              : { backgroundColor: "#f8f9fa", color: "#3c4043" }
          }
        >
          Google Search
        </button>
        <button
          className="search-btn py-2 ms-1"
          style={
            isDarkMode
              ? { backgroundColor: "#303134", color: "#e8eaed" }
              : { backgroundColor: "#f8f9fa", color: "#3c4043" }
          }
        >
          I'm Feeling Lucky
        </button>
      </div>
      <div className="search-links d-flex flex-row mx-auto mt-4">
        <p
          className="me-1"
          style={{
            fontSize: "0.825rem",
            color: `${isDarkMode ? "#bdc1c6" : "#4d5156"}`,
          }}
        >
          Google offered in:
        </p>
        <a
          className="search-lang"
          href="/"
          style={isDarkMode ? { color: "#8ab4f8" } : { color: "#1515A3" }}
        >
          हिन्दी
        </a>
        <a
          className="search-lang"
          href="/"
          style={isDarkMode ? { color: "#8ab4f8" } : { color: "#1515A3" }}
        >
          বাংলা
        </a>
        <a
          className="search-lang"
          href="/"
          style={isDarkMode ? { color: "#8ab4f8" } : { color: "#1515A3" }}
        >
          తెలుగు
        </a>
        <a
          className="search-lang"
          href="/"
          style={isDarkMode ? { color: "#8ab4f8" } : { color: "#1515A3" }}
        >
          मराठी
        </a>
        <a
          className="search-lang"
          href="/"
          style={isDarkMode ? { color: "#8ab4f8" } : { color: "#1515A3" }}
        >
          தமிழ்
        </a>
        <a
          className="search-lang"
          href="/"
          style={isDarkMode ? { color: "#8ab4f8" } : { color: "#1515A3" }}
        >
          ગુજરાતી
        </a>
        <a
          className="search-lang"
          href="/"
          style={isDarkMode ? { color: "#8ab4f8" } : { color: "#1515A3" }}
        >
          ಕನ್ನಡ
        </a>
        <a
          className="search-lang"
          href="/"
          style={isDarkMode ? { color: "#8ab4f8" } : { color: "#1515A3" }}
        >
          മലയാളം
        </a>
        <a
          className="search-lang"
          href="/"
          style={isDarkMode ? { color: "#8ab4f8" } : { color: "#1515A3" }}
        >
          ਪੰਜਾਬੀ
        </a>
      </div>
    </div>
  );
};

export default Body;
