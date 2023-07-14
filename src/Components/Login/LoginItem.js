import { React, useState } from "react";
import { loginFields } from "../../Constants/FormField";
import Input from "../Input";
import LoginSignupHeader from "./LoginSignupHeader";
import { SubBtn } from "../Btn";
import '../CSS/login.css'
// import { Link } from "react-router-dom";

const fields = loginFields;
let fieldState = {};
fields.forEach(field => fieldState[field.id]='');


export default function Login() {

  const [loginState, setLoginState] = useState(fieldState);

  const handleChange=(e) => {
    setLoginState({...loginState,[e.target.id]:e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  }


  const authenticateUser = () => {
    alert("User Authentication Successful");
  }

  return(
     <div className="login-container flex flex-col gap-3 w-full">
      <LoginSignupHeader loginLinkName={"Login"}  signLinkName={"SignUp"} loginURL="/login" signURL="/sign-up" /> 
      <form onSubmit={handleSubmit}>
        <div className="login-inp flex flex-col gap-1">
          {
            fields.map(field => 
            <Input 
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.value]}
              labelFor={field.labelFor}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
            )
          }
        </div>
      </form>
      <SubBtn handleSubmit={handleSubmit} text={"Login"} />
      <a href="#" className="text-primary-500">Forgot Password?</a>
    </div>
  );
}
