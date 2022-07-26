import React, { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Dasboard/layouts/Header";
import LeftNavbar from "./Components/Dasboard/layouts/LeftNavbar";
import "./App.css";
const Dashboard = lazy(() => import("./Components/Dasboard/Dashboard"));
function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading ....</p>}>
        <HashRouter>
          <Header />
          <div className="row m-0 ">
            <div className="col col-md-2 m-0 p-0 d-none d-lg-block">
              <LeftNavbar />
            </div>
            <div className="col col-md-10 m-0 p-0 total-routes">
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </HashRouter>
      </Suspense>
    </div>
  );
}

export default App;
