import { React, useState } from "react";
import { signupFields } from "../../Constants/FormField";
import Input from "../Input";
import LoginSignupHeader from "./LoginSignupHeader";
import { SubBtn } from "../Btn";
import "../CSS/login.css";
import { Link } from "react-router-dom";

const fields = signupFields;
let fieldState = {};
fields.forEach((field) => (fieldState[field.id] = ""));

export default function SignUp() {
  const [signupState, setSignState] = useState(fieldState);

  const handleChange = (e) => {
    setSignState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = () => {
    alert("User Authentication Successful");
  };

  return (
    <div className="signup-container flex flex-col gap-3 w-full">
      <LoginSignupHeader loginLinkName={"Login"} signLinkName={"SignUp"} />
      <form onSubmit={handleSubmit}>
        <div className="signup-inp flex flex-col gap-2">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.value]}
              labelFor={field.labelFor}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
      </form>
      <SubBtn handleSubmit={handleSubmit} text={"Sign Up"} />
      <Link to={""} className="text-primary-500">
        Forgot Password?
      </Link > 
    </div>
  );
}
