import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

export default function Homepage() {
  const gridRef = useRef < AgGridReact > null;
  const [row, setrow] = useState([]);
  const [col, setcol] = useState([
    { field: "created", filter: "agNumberColumnFilter" },
    { field: "id", filter: "agNumberColumnFilter" },
    { field: "email", filter: true, sortable: true },
    { field: "title", filter: true, sortable: true },
    { field: "firstName", filter: true, sortable: true },
    { field: "lastName", filter: true, sortable: true },
  ]);

  useEffect(() => {
    let Data = localStorage.getItem("allUser");
    let x = JSON.parse(Data);

    axios
      .get("http://localhost:4000/accounts", {
        headers: {
          Authorization: "Bearer " + x?.jwtToken,
        },
      })
      .then((e) => {
        setrow(e.data);
      });
  }, []);

  const mynav = useNavigate();
  let mylogout = () => {
    localStorage.removeItem("allUser");
    mynav("/");
  };
  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: 1320 }}>
        <AgGridReact rowData={row} columnDefs={col}></AgGridReact>
      </div>
      <br />
      <button className="btn btn-danger" onClick={mylogout}>
        log-out
      </button>
    </div>
  );
}
