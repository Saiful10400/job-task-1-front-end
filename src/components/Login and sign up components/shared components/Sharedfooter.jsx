import React, { useContext } from "react";
import { FaGoogle  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { contextProvider } from "../../../context api/Context";
const Sharedfooter = ({ data }) => {
  // constext api data.
  const{emailPasswordLogin,googleLogin,gitHubLogin,twitterLogin}=useContext(contextProvider)
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">Or {data} with</div>
      </div>
      <div className="flex justify-center gap-9 items-center">
        <button onClick={googleLogin}>
          <span className="flex items-center gap-2 font-bold">
            <FaGoogle className="text-xl"/> Google
          </span>
        </button>
        <button onClick={gitHubLogin}>
          <span className="flex items-center gap-2 font-bold">
            <FaGithub className="text-xl"></FaGithub> Github
          </span>
        </button>
        <button onClick={twitterLogin}>
          <span className="flex items-center gap-2 font-bold">
            <BsTwitterX className="text-xl"></BsTwitterX> Twitter
          </span>
        </button>
      </div>
      <Link to={data==="login"? "/sign-up" : "/login"} className="font-bold w-max mx-auto underline">
        {data !== "login" ? "Login to" : "Register new"} account
      </Link>
    </div>
  );
};

export default Sharedfooter;
