import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });

  const myhandler = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const mynav = useNavigate();
  const mysub = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/accounts/authenticate", Data)
      .then((v) => {
        localStorage.setItem("allUser", JSON.stringify(v.data));
        console.log(v.data);
        mynav("/home");
      })
      .catch((v) => {
        alert("opss....");
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

        <input
          type="submit"
          className="btn btn-danger mt-4  form-control"
          value="Submit"
        />

        <p className="mt-2">
          Not a member?
          <Link to={"/registrationPage"}>
            <span className="text-danger ">Signup now</span>{" "}
          </Link>
        </p>
      </form>
    </div>
  );
}
