import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { contextProvider } from "../../context api/Context";

const Navbar = () => {
  const {user,logout}=useContext(contextProvider)
  
  const li = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/sign-up"}>Sign up</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {li}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img src={user?.photoURL} className="w-[50px] h-[50px] object-contain" />
        <span>{user?.displayName}</span>
        <span>{user?.email}</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn" onClick={logout}>Logout</a>
      </div>
    </div>
  );
};

export default Navbar;
