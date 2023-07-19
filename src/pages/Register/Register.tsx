import React, { useRef, useState } from "react";
import Title from "./../../../src/components/Title/Title";
import "./Register.css";

const Register = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState("");

  const onHandleClick = () => {
    const emailValue = emailRef.current?.value ?? "";
    const isValidEmail =
      emailValue &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);

    if (!isValidEmail) {
      setEmailError("Invalid message");
      return;
    }

    setEmailError("");

    console.log({
      username: usernameRef.current?.value,
      email: emailValue,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
    });
  };

  return (
    <div className="container">
      <Title text="Sign Up" />
      <p className="text">Please enter your details to continue.</p>
      <input
        className="input"
        type="text"
        placeholder="Username"
        ref={usernameRef}
      />
      <input
        className={"input" + (emailError ? " error" : "")}
        type="text"
        placeholder="Email"
        ref={emailRef}
      />
      {emailError && <p className="error-message">{emailError}</p>}
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
      <button onClick={onHandleClick} className="btn">
        Sign Up
      </button>
    </div>
  );
};

export default Register;
