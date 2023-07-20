import React, { useState } from "react";
import { BtnFill, BtnOutlined } from "./Btn";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "./CSS/navbar.css";
import '../index.css';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleclick = (() => {
    let navMob = document.querySelector(".nav-mobile");
    setClicked(!clicked);
    if (clicked) {
      navMob.style.transform ="translateX(100%)"
    }else navMob.style.transform ="translateX(0px)"
  })

  return (
    <div className="navbar-container common-container sticky top-0 z-10  py-2 bg-white shadow-lg h-[65px] ">
      <div
        className="navbar-content relative flex justify-between items-center
      "
      >
        <div className="nav-logo">
          <Logo />
        </div>

        <div className="nav-mobile items flex items-center gap-6">
          <div className="nav-links h-full flex justify-center items-center">
            <Link className="block hover:text-primary-900 hover:border-b-2 border-primary-900" to={"/"}>
              Home
            </Link>
            <Link className="block hover:text-primary-900 hover:border-b-2 border-primary-900" to={"/candidate-search"}>
              Find Candidates
            </Link>
            <Link className="block hover:text-primary-900 hover:border-b-2 border-primary-900" to={""}>
              Services
            </Link>
            <Link to={"/login"}>
              <BtnOutlined text={"Login"} />
            </Link>
            <Link to={"/sign-up"}>
              <BtnFill text={"Register"} />
            </Link>
          </div>
        </div>
        <div className="hamburger" onClick={handleclick}>
          <span id="l-1" className={`line ${clicked ? "line-1" : ""}`}></span>
          <span id="l-2" className={`line ${clicked ? "line-2" : ""}`}></span>
          <span id="l-3" className={`line ${clicked ? "line-3" : ""}`}></span>
        </div>
      </div>
    </div>
  );
}
