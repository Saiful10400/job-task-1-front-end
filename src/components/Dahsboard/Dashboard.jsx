import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const li=<>
    <li><NavLink to={"/dashboard/task_manager"} >Task manager</NavLink></li>
    <li><NavLink to={"/dashboard/profile"} >Profile</NavLink></li>
    <li><NavLink to={"/dashboard/Create_task"} >Create a task</NavLink></li>
    <li><NavLink to={"/"} >Home</NavLink></li>
    </>
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {li}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
