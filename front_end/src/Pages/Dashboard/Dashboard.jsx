import React from "react";
import Topbar from "../../Components/Dashboard/Topbar";
import Sidebar from "../../Components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="position-relative dashboard">
      <Topbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}
