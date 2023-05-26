import React, { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import "../edit-profile/edit.css";
import { Link } from "react-router-dom";

export default function Edit() {
  const formik = "";
  //   const formik = useFormik({
  //     initialValues: {
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //     },
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //       localStorage.setItem("values", JSON.stringify(values));
  //     },
  //   });
  function newData(e, values) {
    console.log(values, 1);
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("values"));
    if (data) {
      setData(data);
    }
  }, []);

  return (
    <div className="display">
      <Formik
        initialValues={{ email: "", firstName: "", lastName: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("values", JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={setData(values)}>
            <h1>Edit Information</h1>
            <div className="display1">
              <label>First Name</label>
              <input
                type="firstName"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
              />
            </div>
            <div className="display1">
              <label>Last Name</label>
              <input
                type="lastName"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
              />
            </div>
            <div className="display1">
              <label>email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
            </div>

            <Link to={{ pathname: "/profile" }} target="_blank">
              {" "}
              <button className="btn" type="submit">
                Update
              </button>
            </Link>
          </form>
        )}
      </Formik>
      {/* <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={() => formik.handleChange}
          value={data.firstName || ""}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={data.lastName}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={data.email}
        />

        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}
