import React, { useEffect, useState } from "react";
import "../profile/profile.css";
import { Link, useNavigate } from "react-router-dom";
import { ProfileContext, useLocalStorage } from "../../context/ProfileContext";
import Modal from "../Modal/modal";
import { useContext } from "react";


export default function Profile() {
  const { value, setValue } = useLocalStorage("values", []);
  // const [value, setvalue] = useState([]);
  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("values"));
  //   if (data) {
  //     setData(data);
  //   }
  // }, []);
  const { visible, handleOpen } = useContext(ProfileContext)

 
  return (
    <div className="welcome">
      {visible && <Modal />}
      <div className="welcome1">
        <h3>Welcome to your dashboard {value.firstName}!</h3>
        <div className="infos">
            <img src={value.image} alt="" /> 
          </div>
        <div className="info">
          <div className="infos">
           <label>{value.firstName}</label>
          </div>
          <div className="infos">
           <label>{value.lastName}</label>
          </div>
          <div className="infos">
           <label>{value.email}</label>
          </div>
          
        </div>
      
          <button className="btn" onClick={handleOpen}>Edit Info</button>
 
      </div>
    </div>
  );
}
