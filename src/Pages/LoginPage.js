import React from "react";
import '../Components/CSS/loginSignPage.css'
import Login from '../Components/Login/LoginItem';
import Logo from "../Components/Logo";

export default function LoginPage() {
  return (
    <div className="login-page-container w-full py-5 px-3 flex flex-col justify-center items-center">
      <Logo/>
      <div className="login-page-content md:w-full max-w-[512px]: flex flex-col justify-center gap-2 items-center rounded-br
      border border-white
      ">
        <div className="login-form-content w-full">
          <Login />
        </div>
      </div>
    </div>
  );
}
