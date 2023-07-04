import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Additem, Lessitem } from "./Action/Action";
export default function INDC() {
  const data = useSelector((x) => x.UserReduser);
  const disp = useDispatch();

  let add = () => {
    disp(Additem());
  };
  let less = () => {
    disp(Lessitem());
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "20%",
      }}
    >
      <div>
        <button className="btn btn-danger" onClick={add}>
          +
        </button>
        <h1>{data}</h1>
        <button className="btn btn-info" onClick={less}>
          -
        </button>
      </div>
    </div>
  );
}
