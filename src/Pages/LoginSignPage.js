import React, { createContext } from "react";
import { useParams } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignPage from "./SignUpPage";

const authtype = createContext();

export default function LoginSignPage() {
  const params = useParams();
  let output;
  const authParam = params.auth;

  if (authParam === "login") {
    output = 
    <authtype.Provider value={authParam}>
        <LoginPage />
    </authtype.Provider>
    ;
  }
  if (authParam === "sign-up") {
    output = 
    <authtype.Provider value={authParam}>
        <SignPage />
    </authtype.Provider>
    ;
  }

  return <>{output}</>;
}

export {authtype};