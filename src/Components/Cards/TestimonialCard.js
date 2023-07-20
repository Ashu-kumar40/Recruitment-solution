import React from "react";

export default function TestimonialCard() {
  return (
    <div className="test-card-container flex flex-col justify-center items-center gap-4 
    min-w-[270px] px-5 py-7 
    rounded-default 
    bg-neutral-100
    card-shadow">
      <div className="profile-photo">
        <img src={require("../../Assets/images/profile.png")} alt="" />
      </div>

      <div className="nameRole text-center">
        <h2 className="name text-base font-bold">John Smith</h2>
        <span className="designation text-neutral-500">
          HR Manager at XYZ Corporation
        </span>
      </div>

      <div className="relative description text-center">
        <p className="z-10">
          Using this recruitment solution has been a game-changer for our hiring
          process. We've significantly reduced our time-to-hire and found
          exceptional candidates that perfectly fit our company culture.
        </p>
        {/* <img className="absolute -top-1 -left-2 z-0" src={require('../../Assets/images/single-quote.png')} alt="" /> */}
      </div>
    </div>
  );
}
