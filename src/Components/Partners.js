import React from "react";
import "./CSS/partners.css";

export default function Partners() {
  return (
    <div className="partners-container w-full">
      <div className="partners-content ">
        <h1 className="subheading">Trusted By</h1>
        <div className="company-name-sec text-neutral-400 flex flex-wrap justify-center items-center">
          <h1 className="comp-name">COMPANY 1</h1>
          <h1 className="comp-name">COMPANY 2</h1>
          <h1 className="comp-name">COMPANY 3</h1>
          <h1 className="comp-name">COMPANY 4</h1>
          <h1 className="comp-name">COMPANY 5</h1>
          <h1 className="comp-name">COMPANY 6</h1>
        </div>
      </div>
    </div>
  );
}
