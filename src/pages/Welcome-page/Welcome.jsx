import React from "react";
import SignupForm from "../create-profile";
import { Link } from "react-router-dom";
import "../Welcome-page/Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome1">
        <h1>👋 WELCOME </h1>
        <p>SIGNUP AND BEGIN YOUR JOURNEY WITH US</p>
        <Link to={{ pathname: "/sign" }} target="_blank">
          {" "}
          <button className="btn">SIGNUP</button>
        </Link>
      </div>
    </div>
  );
}
