import React from "react";
import { BtnFill } from "./Btn";
import "./CSS/findCandSec.css";
import { Link } from "react-router-dom";

export default function FindCandidateSec() {
  return (
    <div className="find-cand-container w-full py-5 px-3">
      <div className="find-cand-content flex flex-col gap-3">
        <div className="find-cand-left flex flex-col gap-3 min-w-[300px]">
          <h1 className="subheading text-left">Hire The Best Candidates</h1>
          <p>
            Finding the perfect fit for your company is crucial, and our
            platform empowers you to do just that. Leverage our comprehensive
            candidate search and evaluation tools to connect with the most
            talented individuals who align with your company culture and
            requirements. With our efficient hiring process, you can confidently
            hire the best candidates and drive your business forward.
          </p>
          <Link to={"/candidate-search"}>
            <BtnFill text={"Find Candidates"} />
          </Link>
        </div>
        <div className="find-cand-right w-full h-full rounded-br"></div>
      </div>
    </div>
  );
}
