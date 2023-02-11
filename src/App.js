import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import DotsGrey from "./assets/dots-grey.png";
import DotsLight from "./assets/dots-light.png";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeMode = () => {
    if (isDarkMode === false) {
      setIsDarkMode(true);
    } else if (isDarkMode === true) {
      setIsDarkMode(false);
    }
  };

  if (isDarkMode === true) {
    document.body.style.backgroundColor = "#202124";
  } else {
    document.body.style.backgroundColor = "#fff";
  }

  return (
    <>
      <div className="d-flex justify-content-end align-items-center px-3 pt-3">
        <div
          className={`nav-item text-${isDarkMode ? "light" : "dark"}`}
          style={{ width: "50px" }}
          onClick={handleThemeMode}
          id="theme-toggler"
        >
          &#9788;
        </div>
        <div className="nav-item" style={{ width: "50px" }}>
          <a
            className={`nav-link link-text text-${
              isDarkMode ? "light" : "dark"
            }`}
            href="/"
          >
            Gmail
          </a>
        </div>
        <div className="nav-item">
          <a
            className={`nav-link link-text text-${
              isDarkMode ? "light" : "dark"
            }`}
            href="/"
          >
            Images
          </a>
        </div>
        <div
          className="nav-item me-3"
          id={isDarkMode ? "app-icon-dark" : "app-icon-light"}
        >
          <img
            src={isDarkMode ? DotsLight : DotsGrey}
            alt="dots"
            style={{ width: "50%" }}
          />
        </div>
        <div className="nav-item sign-btn">
          <a className="nav-link" href="/">
            Sign In
          </a>
        </div>
      </div>
      <Body darkMode={isDarkMode} />
      <Footer darkMode={isDarkMode} />
    </>
  );
}

export default App;
