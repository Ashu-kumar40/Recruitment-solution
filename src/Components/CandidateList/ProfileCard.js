import React from "react";
import '../CSS/profileCard.css'
import { TagFillWDark, TagOutlined } from "../Btn";

export default function ProfileCard({
  name,
  location,
  description,
  profileUrl
}) {
  return (
    <div
      className="profile-card-container flex flex-col items-start gap-5
      py-6 px-5
      bg-neutral-100
      rounded-br
    "
    >
      <div className="name-image flex items-center gap-5">
        <img
          className="w-10 h-10 sm:w-9 rounded-round"
          // src="https://source.unsplash.com/400x400/?people" 
          src={profileUrl}
          alt=" photo"
        />
        <div className="name">
          <h2 className="name text-lg sm:text-base font-bold">{name}</h2>
          <div className="location">
            {/* <span className="icon">icon</span> */}
            <span className="designation text-neutral-500">{location}</span>
          </div>
        </div>
      </div>
      <div className="profile-desc">{description}</div>
      <div
        className="flex items-center content-start gap-1 self-stretch flex-wrap
        "
      >
        <TagOutlined text={"Frontend Developer"}/>
        <TagOutlined text={"UI/UX Designer"}/>
        <TagOutlined text={"Graphic Designer"}/>
      </div>
      <div className="select-btn w-full flex gap-1">
        <TagFillWDark text={"View Profile"}/>
        <TagFillWDark text={"Select"}/>
      </div>
    </div>
  );
}