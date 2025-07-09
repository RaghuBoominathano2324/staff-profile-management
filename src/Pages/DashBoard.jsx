import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
