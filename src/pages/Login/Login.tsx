import React, { useRef, useState } from "react";
import Title from "./../../../src/components/Title/Title";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onHandleClick = () => {
    console.log({
      email: loginRef.current?.value,
      password: passwordRef.current?.value,
    });
  };

  return (
    <form className="container">
      <Title text="Login" />
      <div className="inputLogin">
        <input
          className="input"
          type="text"
          placeholder="Username"
          ref={loginRef}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button onClick={onHandleClick} type="submit" className="btn">
          Log In
        </button>
      </div>
      <Link to="/register" className="link">
        Sing in
      </Link>
    </form>
  );
};

export default Login;
