import React from "react";
import '../CSS/profileCard.css'
import { TagFillWDark, TagOutlined } from "../Btn";

export default function ProfileCard({
  name,
  location,
  description,
  profileUrl,
  role
}) {
  return (
    <div
      className="profile-card-container flex flex-col items-start gap-5
      py-6 px-5
      bg-neutral-100
      rounded-default
      card-shadow
    "
    >
      <div className="name-image flex items-center gap-5">
        <img
          className="bg-image w-[72px] h-[72px] rounded-round"
          // src={require('../../Assets/images/profile.png')}  
          src={profileUrl}
          alt="Profile"
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
        <TagOutlined text={role}/>
      </div>
      <div className="select-btn w-full flex gap-1">
        <TagFillWDark text={"View Profile"}/>
        <TagFillWDark text={"Select"}/>
      </div>
    </div>
  );
}
