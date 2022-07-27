import React from "react";
import LeftNavbar from "./Layouts/Leftnavbar";
import Header from "./Sidebar/Sidebar";

export default function CommanPage({ children }) {
  return (
    <div className="row p-0 w-100">
      <div className="col-md-2 p-0 d-none d-lg-block">
        <LeftNavbar />
      </div>
      <div className="col-md-10 p-0 m-0">
        <main>{children}</main>
      </div>
    </div>
  );
}
