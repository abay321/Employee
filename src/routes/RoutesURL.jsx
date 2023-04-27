import React from "react";
import { Route, Routes } from "react-router-dom";
import EditUser from "../pages/colums/Edit";
import EmployeeData from "../pages/Employee-data";
import NewEmployee from "../pages/New-Employee";

const RoutesURL = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeData />} />
      <Route path="/new-employee" element={<NewEmployee />} />
    </Routes>
  );
};

export default RoutesURL;
