import React from "react";
import { BtnOutlinedDark } from "./Btn";
import './CSS/footer.css'
import Input from "./Input";
import { LogoDark } from "./Logo";

export default function Footer() {
  return (
    <div className="footer-container flex flex-col bg-primary-900 text-white">
      <div className="main-content">
        <div className="subscribe-section flex flex-col gap-5 w-[50%] md:w-full ">
          <LogoDark width={"200px"}/>
          <p className="text-sm">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex flex-col gap-2">
            <div className="subscribe flex gap-1">
              <Input placeholder={"Enter your email"}/>
              <BtnOutlinedDark />
            </div>
            <p className="text-xs">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>

        <div
          className="
            links-section text-xs"
        >
          <div className="flex flex-col">
            <h2>Column One</h2>
            <div className="links flex flex-col">
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </div>
          </div>
          <div className="flex flex-col">
            <h2>Column Two</h2>
            <div className="links flex flex-col">
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </div>
          </div>
          <div className="flex flex-col">
            <h2>Follow Us</h2>
            <div className="links flex flex-col">
              <a href="#">
                <span>icon</span>
                <span>Facebook</span>
              </a>
              <a href="#">
                <span>icon</span>
                <span>Instagram</span>
              </a>
              <a href="#">
                <span>icon</span>
                <span>Twitter</span>
              </a>
              <a href="#">
                <span>icon</span>
                <span>Linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-content text-xs max-w-[1156px] flex justify-between items-start content-start flex-wrap pt-6 md:pt-5 sm:pt-4 border-t border-white">
        <div className="copyright">
          © 2023 RecruitEase. All rights reserved.
        </div>
        <div className="policy flex w-fit gap-5 ">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </div>
  );
}
