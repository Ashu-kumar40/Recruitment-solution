import React from "react";
import "./CSS/landingPageHero.css";

export default function LandingPageHero() {
  return (
    <div className="landing-container flex justify-center items-center w-full">
      <div className="illustration illustration-1"></div>
      <div className="illustration illustration-2"></div>
      <div className="landing-content">
        <h1 className="headline">
          Transform Your Hiring Process with Our Seamless Recruitment Solution
        </h1>
        <p className="details">
          Welcome to our digital recruitment solution, designed to revolutionize
          the way hiring managers and HR professionals find top talent for their
          companies. Our platform streamlines the hiring process, saving you
          time and effort while ensuring you find the perfect candidates for
          your team.
        </p>
      </div>
    </div>
  );
}
