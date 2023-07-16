import React from "react";
import "./CSS/howItworks.css";
import { NumIcon } from "./HighlightSec/Icon";
import { HowItWorksData } from "../Constants/data";
import Subheading from "./Subheading";

const boxes = HowItWorksData;

export default function HowItWorksSec() {
  return (
    <div className="howItWorksSec-container">
      <Subheading text={"How It Works?"} alignText={"center"}/>
      <div className="howItWorksSec-content">
        {boxes.map((box) => (
          <div className="howItWorksSec-box">
            <NumIcon num={box.id} color={box.color} />
            <div className="howItWorksSec-desc rounded-br bg-neutral-100 p-3">
              {box.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 