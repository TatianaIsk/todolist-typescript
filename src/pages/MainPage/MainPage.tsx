import React from "react";
import Title from "./../../../src/components/Title/Title";
import "./MainPage.css";

const MainPage = () => {
  return (
    <form className="container-main">
      <div className="header">
        <Title text="Username" />
        <button className="btn-delete">Delete list</button>
      </div>
      <button className="btn-category">New category</button>
    </form>
  );
};

export default MainPage;
