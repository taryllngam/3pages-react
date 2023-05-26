import React, { useEffect, useState } from "react";
import "../profile/profile.css";
import { Link } from "react-router-dom";

export default function Profile() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("values"));
    if (data) {
      setData(data);
    }
  }, []);
  return (
    <div className="welcome">
      <div className="welcome1">
        <h3>Welcome to your dashboard {data.firstName}!</h3>
        <h2>CLIENT INFO</h2>
        <div className="info">
          <div className="infos">
            <span>FIRST NAME</span> :<label>{data.firstName}</label>
          </div>
          <div className="infos">
            <span>LAST NAME</span> :<label>{data.lastName}</label>
          </div>
          <div className="infos">
            <span>EMAIL</span> :<label>{data.email}</label>
          </div>
          <div className="infos">
            <span>IMAGE</span> :<label>{data.image}</label>
          </div>
        </div>
        <Link to={{ pathname: "/edit" }} target="_blank">
          {" "}
          <button className="btn">Edit Info</button>
        </Link>
      </div>
    </div>
  );
}
