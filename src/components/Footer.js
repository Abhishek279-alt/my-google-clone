import React from "react";

const Footer = (props) => {
  let isDarkMode = props.darkMode;
  console.log("This is " + isDarkMode);
  return (
    <footer
      className="google-footer fixed-bottom"
      style={
        isDarkMode
          ? { backgroundColor: "#000" }
          : { backgroundColor: "#f2f2f2" }
      }
    >
      <div
        className=" py-3 ps-4"
        style={{
          color: `${isDarkMode ? "#9aa0a6" : "#70757a"}`,
          fontSize: "0.93rem",
          borderBottom: `1px solid ${isDarkMode ? "#666666" : "#d1d1d1"}`,
        }}
      >
        India
      </div>
      <div className="d-flex flex-row justify-content-between py-3 px-3">
        <div>
          <span className="footer-links mx-3">
            <a
              href="/"
              style={isDarkMode ? { color: "#9aa0a6" } : { color: "#70757a" }}
            >
              About
            </a>
          </span>
          <span className="footer-links mx-3">
            <a
              href="/"
              style={isDarkMode ? { color: "#9aa0a6" } : { color: "#70757a" }}
            >
              Advertising
            </a>
          </span>
          <span className="footer-links mx-3">
            <a
              href="/"
              style={isDarkMode ? { color: "#9aa0a6" } : { color: "#70757a" }}
            >
              Business
            </a>
          </span>
          <span className="footer-links mx-3">
            <a
              href="/"
              style={isDarkMode ? { color: "#9aa0a6" } : { color: "#70757a" }}
            >
              How Search Works
            </a>
          </span>
        </div>
        <div>
          <span className="footer-links mx-3">
            <a
              href="/"
              style={isDarkMode ? { color: "#9aa0a6" } : { color: "#70757a" }}
            >
              Privacy
            </a>
          </span>
          <span className="footer-links mx-3">
            <a
              href="/"
              style={isDarkMode ? { color: "#9aa0a6" } : { color: "#70757a" }}
            >
              Search
            </a>
          </span>
          <span className="footer-links mx-3">
            <a
              href="/"
              style={isDarkMode ? { color: "#9aa0a6" } : { color: "#70757a" }}
            >
              Settings
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
