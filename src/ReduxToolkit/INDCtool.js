import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { additem, lessitem } from "./Slice/CounterSlice";
export default function INDCtool() {
  const data = useSelector((x) => x.CounterSlice);
  const disp = useDispatch();

  let add = () => {
    disp(additem());
  };
  let less = () => {
    disp(lessitem());
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
