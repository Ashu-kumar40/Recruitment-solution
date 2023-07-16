import React from "react";
import "./CSS/faqs.css";
import Subheading from "./Subheading";

export default function Faq() {
  return (
    <div className="faq-container">
      <div className="faq-content flex flex-col">
        <Subheading text={"FAQs"} alignText={"center"} />
        <div className="qna-container">
          <div className="qna">
            <h2 className="que">How do I create an account for my company?</h2>
            <p className="ans">
              To create an account for your company, click on the "Register"
              button on the homepage and fill out the required information. Once
              registered, you'll have access to our comprehensive recruitment
              solution and its features.
            </p>
          </div>
          <div className="qna">
            <h2 className="que">How do I create an account for my company?</h2>
            <p className="ans">
              To create an account for your company, click on the "Register"
              button on the homepage and fill out the required information. Once
              registered, you'll have access to our comprehensive recruitment
              solution and its features.
            </p>
          </div>
          <div className="qna">
            <h2 className="que">How do I create an account for my company?</h2>
            <p className="ans">
              To create an account for your company, click on the "Register"
              button on the homepage and fill out the required information. Once
              registered, you'll have access to our comprehensive recruitment
              solution and its features.
            </p>
          </div>
          <div className="qna">
            <h2 className="que">How do I create an account for my company?</h2>
            <p className="ans">
              To create an account for your company, click on the "Register"
              button on the homepage and fill out the required information. Once
              registered, you'll have access to our comprehensive recruitment
              solution and its features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
