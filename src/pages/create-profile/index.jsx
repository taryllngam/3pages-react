import React from "react";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import "../create-profile/styles.css";
import img1 from "../../create.png";
import { Formik } from "formik";
import { Link } from "react-router-dom";

export default function SignupForm() {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      image: "",
    },
    Validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.firstName) {
        errors.firstName = "FirstName Required";
      }
      if (!values.lastName) {
        errors.lastName = "LastName required";
      }
      return errors;
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      localStorage.setItem("values", JSON.stringify(values));
    },
  });

  return (
    <div className="display">
      <div>
        <img src={img1} alt="" />
      </div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h1>CREATE ACCOUNT</h1>
        <div className="display1">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
        <div className="display1">
          <h1></h1>
          <label htmlFor="lastName">Last Name</label>
          <input
            className="bg-slate-900"
            id="lastName"
            name="lastName"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <div className="display1">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className="display3">
          <label>Image</label>
          <input
            type="file"
            id="image"
            name="image"
            multiple
            accept="image/jpg, image/jpeg, image/png"
            onChange={formik.handleChange}
            className="img"
          />
        </div>

        <Link to={{ pathname: "/profile" }} target="_blank">
          {" "}
          <button className="btn" type="submit">
            SignUp
          </button>
        </Link>
      </form>
    </div>
  );
}
