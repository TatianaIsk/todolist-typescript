import React, { useRef, useState } from "react";
import Title from "./../../../src/components/Title/Title";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../../ValidationUtils";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState(false);

  const onHandleClick = () => {
    emailRef.current && setEmailError(!isValidEmail(emailRef.current?.value));

    console.log({
      username: usernameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
    });

    navigate("/main");
  };

  return (
    <form className="container">
      <Title text="Sign Up" />
      <p className="text">Please enter your details to continue.</p>
      <input
        className="input"
        type="text"
        placeholder="Username"
        ref={usernameRef}
      />
      <input
        className={"input" + (emailError ? "error" : "")}
        type="text"
        placeholder="Email"
        ref={emailRef}
      />
      {emailError && (
        <p className="errorMessage">Invalid message{emailError}</p>
      )}
      <input
        className="input"
        type="password"
        placeholder="Password"
        ref={passwordRef}
      />
      <input
        className="input"
        type="password"
        placeholder="Confirm password"
        ref={confirmPasswordRef}
      />
      <button onClick={onHandleClick} type="submit" className="btn">
        Sign Up
      </button>
    </form>
  );
};

export default Register;
