import React from "react";
import { BtnOutlined } from "../Components/Btn";
import Faq from "../Components/Faq";
import Partners from "../Components/Partners";
import FindCandidateSec from "../Components/FindCandidateSec";
import LandingPageHero from "../Components/LandingPageHero";
import HighlightSec from "../Components/HighlightSec/HighlightSec";
import HowItWorksSec from "../Components/HowItWorksSec";
import TestimonialSec from "../Components/TestimonialSec";
import Subheading from "../Components/Subheading";
import Navbar from "../Components/Navbar";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="homepage-container w-full py-6">
        <div>
          <LandingPageHero />
        </div>
        <div>
          <HighlightSec />
        </div>
        <div>
          <Partners />
        </div>
        <div>
          <HowItWorksSec />
        </div>
        <div>
          <FindCandidateSec />
        </div>
        <div>
          <TestimonialSec />
        </div>
        <div>
          <Faq />
        </div>
        <div className="w-full flex flex-col justify-center items-center py-5">
          <Subheading text={"Still have doubt?"} alignText={"center"} />
          <BtnOutlined text={"Contact Us"} />
        </div>
      </div>
    </>
  );
}
