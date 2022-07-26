import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import DashboardForCP from "./Components/Dashboard/DashboardForCP";
import Header from "./Components/Layouts/Header";
import StudentPage from "./Components/Student/StudentPage";
import FeesPage from "./Components/Fees/FeesPage";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DashboardForCP />} />
          <Route path="/studentPage" element={<StudentPage />} />
          <Route path="/feesPage" element={<FeesPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
