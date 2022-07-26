import React from "react";
import LeftNavbar from "./Layouts/Leftnavbar";
import Header from "./Sidebar/Sidebar";

export default function CommanPage({ children }) {
  return (
    <div className="row p-0">
      <div className="col-md-2 p-0">
        <LeftNavbar />
      </div>
      <div className="col-md-10 p-0">
        <main>{children}</main>
      </div>
    </div>
  );
}
