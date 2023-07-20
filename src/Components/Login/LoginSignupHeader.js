import { React, useContext} from "react";
import { Link} from "react-router-dom";
import { SubBtn } from "../Btn";
import { authtype} from "../../Pages/LoginSignPage";

const dis =
  "sub-btn border-2 bg-neutral-100 text-neutral-400 border-neutral-400";

const activeState =
  "sub-btn border-2 border-primary-900 bg-primary-900 text-white";


export default function LoginSignupHeader({
  loginLinkName,
  loginURL = "/login",
  signLinkName,
  signURL = "/sign-up",
}) { 

  const authParam = useContext(authtype);

  let customLogin; 
  let customSign;

  if (authParam === "login") {
    customLogin = activeState;
    customSign = dis;
  }

  if (authParam === "sign-up") {
    customLogin = dis;
    customSign = activeState;
  }


  
  return (
    <div className="flex justify-between items-center gap-2 w-full">
      <Link to={loginURL} className="w-full">
        <SubBtn
          custom={customLogin}
          text={loginLinkName}
        />
      </Link>
      <Link to={signURL} className="w-full">
        <SubBtn
          custom={customSign}
          text={signLinkName}
        />
      </Link>
    </div>
  );
}
