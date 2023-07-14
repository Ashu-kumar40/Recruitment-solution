import React from "react";
import "../CSS/candidateSearch.css";
import Input from "../Input";
import { BtnFill } from "../Btn";

export default function CandidateSearch() {
  return (
    <div className="cand-search-container flex justify-center items-center">
      <div className="cand-search-content flex flex-col gap-4">
        <div className="heading">
          <h1 >Recruit with Ease</h1>
        </div>
        <div className="cand-search-sec flex flex-col justify-center items-center gap-3">
          <div className="role-search search-common w-full">
            <Input placeholder="Search Role" />
            <BtnFill text="Search" />
          </div>
          <div className="location-search search-common w-full">
          <Input placeholder="Search Location" />
            <BtnFill text="Search" />
          </div>
        </div>
      </div>
    </div>
  );
}
