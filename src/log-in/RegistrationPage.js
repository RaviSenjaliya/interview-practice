import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const [Data, setData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: true,
  });

  const myhandler = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const mysub = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/accounts/register", Data)
      .then((i) => {
        alert("done....");
        console.log(i.data);
      })
      .catch(() => {
        alert("opsss....");
      });
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
        marginTop: "50px",
        border: "5px solid black",
      }}
      className="rounded-4 p-3"
    >
      <form onSubmit={mysub}>
        <TextField
          label="title"
          name="title"
          onChange={myhandler}
          className="w-100 mt-3"
          variant="outlined"
        />
        <TextField
          label="firstName"
          name="firstName"
          onChange={myhandler}
          className="w-100 mt-3"
          variant="outlined"
        />
        <TextField
          label="lastName"
          name="lastName"
          onChange={myhandler}
          className="w-100 mt-3"
          variant="outlined"
        />
        <TextField
          label="email"
          name="email"
          onChange={myhandler}
          className="w-100 mt-3"
          variant="outlined"
        />
        <TextField
          label="password"
          name="password"
          onChange={myhandler}
          className="w-100 mt-3"
          variant="outlined"
        />
        <TextField
          label="confirmPassword"
          name="confirmPassword"
          onChange={myhandler}
          className="w-100 mt-3"
          variant="outlined"
        />

        <input
          type="submit"
          className="btn btn-danger mt-4  form-control"
          value="Submit"
        />
        <Link to={"/"}>
          <p className="mt-2">
            <span className="text-danger ">Log-in now</span>
          </p>
        </Link>
      </form>
    </div>
  );
}
