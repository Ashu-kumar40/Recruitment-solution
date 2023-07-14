import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="w-fit">
      <Link to={"/"}>
        <img src={require("../Assets/images/logo-lg.png")} alt="logo" />
      </Link>
    </div>
  );
}
export function LogoDark({width}) {
  return (
    <div className="w-fit">
      <Link to={"/"}>
        <img className={width} src={require("../Assets/images/logoDarkMode.png")} alt="logo" />
      </Link> 
    </div>
  );
}
