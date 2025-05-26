import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

 const DefaultLayout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};
export default DefaultLayout