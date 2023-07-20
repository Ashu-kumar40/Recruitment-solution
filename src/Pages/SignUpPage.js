import React from "react";
import '../Components/CSS/loginSignPage.css'
import SignUp from "../Components/Login/SignupItem";
import Logo from "../Components/Logo";

export default function SignPage() {
  return (
    <div className="login-page-container w-full py-5 px-3 flex flex-col justify-center items-center">
        <Logo />
      <div className="login-page-content w-full flex flex-col justify-center gap-1 items-center rounded-default
      border border-white
      ">
        <div className="login-form-content w-full">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
