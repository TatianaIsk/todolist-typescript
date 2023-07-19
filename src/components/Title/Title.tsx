import React from "react";
import "./Title.css";

const Title: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="title">{text}</h2>;
};

export default Title;
