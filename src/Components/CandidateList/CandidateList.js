import React, { useState } from "react";
import { candidates } from "../../Constants/data";
import ProfileCard from "./ProfileCard";
import "../CSS/candidateList.css";

const cands = candidates; 

export default function CandidateList({ role, location }) {


  return (
    <div className="cand-list-container">
      <div className="cand-list-content">
        {
          (role === "" && location === "") 
          ? 
          (
            cands.map((cand) => (

            <div key={cand.photoUrl}>
              <ProfileCard
                name={cand.name}
                profileUrl={cand.photoUrl}
                description={cand.description}
                location={cand.location}
                role={cand.jobRole}
              />
            </div>
          )))
          : 
          (cands.filter((data) => (data.jobRole).toLocaleLowerCase() === (role).toLocaleLowerCase() || (data.location).toLocaleLowerCase() === (location).toLocaleLowerCase()).map((cand) => (
            <div key={cands.indexOf(cand)}>
              <ProfileCard
                name={cand.name}
                profileUrl={cand.photoUrl}
                description={cand.description}
                location={cand.location}
                role={cand.jobRole}
              />
            </div>
          )))
        }
      </div>
    </div>
  );
}
