import React from "react";
import {
  BtnFill,
  BtnOutlined,
  BtnOutlinedDark,
  SubBtn,
  TagFillDark,
  TagFillWDark,
  TagOutlined,
} from "../Components/Btn";
import HighlightCard from "../Components/Cards/HighlightCard";
import ProfileCard from "../Components/CandidateList/ProfileCard";
import TestimonialCard from "../Components/Cards/TestimonialCard";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
//   import {
//     Client,
//     Feedback,
//     Global,
//     Hire,
//     Increment,
//     NumIcon,
//     Time,
//   } from "../Components/HighlightIcons/Icon";
import LoginSignPage from "./LoginPage";
import Partners from "../Components/Partners";
import Input from "../Components/Input";
import FindCandidateSec from "../Components/FindCandidateSec";
import LandingPageHero from "../Components/LandingPageHero";
import CandidateSearch from "../Components/CandidateList/CandidateSearchSec";

export default function Homepage() {
  return (
    <div>
      <div>
        <LandingPageHero />
      </div>
      <div className="App box-border w-full ">
        <div className="my-2">
          <BtnFill text={"Login"} />
          <BtnFill text={"Register"} />
          <BtnOutlined text={"Outlined"} />
          <TagOutlined />
          <TagFillDark />
          <TagFillWDark />
          <SubBtn text={"Submit"} />
          <Input />
        </div>

        <div className="bg-primary-900 p-5 my-2">
          <BtnOutlinedDark />
          <HighlightCard />
        </div>

        <div className="flex flex-wrap">
          {/* <Client />
        <Time />
        <Hire />
        <Feedback />
        <Increment />
        <NumIcon />
        <Global /> */}
          <TestimonialCard />
          <Partners />
          <Faq />
        </div>
        <div className="flex flex-wrap gap-3">
          <ProfileCard name={"Ashish"} />
          <ProfileCard name={"Ashu"} />
          <ProfileCard name={"Farman"} />
        </div>
        <LoginSignPage />
        <CandidateSearch />
        <FindCandidateSec />
        <Footer />
      </div>
    </div>
  );
}
