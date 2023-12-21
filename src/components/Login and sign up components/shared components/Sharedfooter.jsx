import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { contextProvider } from "../../../context api/Context";
import { inputstyle } from "../Login";
import useAxiosPublic from "../../../custom Hoocks/useAxiosPublic";
const Sharedfooter = ({ data }) => {
  const axiosPublic=useAxiosPublic()
  const {user}=useContext(contextProvider)

  // constext api data.
  const { googleLogin, gitHubLogin, twitterLogin } =
    useContext(contextProvider);

  // common function for collecting dta via modal.
  const commonfunction = () => {
    // document.getElementById("my_modal_3").showModal();
    // const email=user.email
    // console.log(user)
    // axiosPublic.post("/getAUser",{email})
    // .then(res=>console.log(res.data))
  };

  // modal submit handle.
  const modalFormHandle=()=>{
    console.log("hellow siaufl")
  }

  // secondtime professin submit.

  const secoundTimeProfessionSubmit=(e)=>{
    e.preventDefault()
    const profession=e.target.profession.value
    const email=e.target.email
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">Or {data} with</div>
      </div>
      <div className="flex justify-center gap-9 items-center">
        <button onClick={() => {
            googleLogin().then(() => commonfunction());
          }}>
          <span className="flex items-center gap-2 font-bold">
            <FaGoogle className="text-xl" /> Google
          </span>
        </button>
        <button
          onClick={() => {
            gitHubLogin().then(() => commonfunction());
          }}
        >
          <span className="flex items-center gap-2 font-bold">
            <FaGithub className="text-xl"></FaGithub> Github
          </span>
        </button>
        <button onClick={() => {
            twitterLogin().then(() => commonfunction());
          }}>
          <span className="flex items-center gap-2 font-bold">
            <BsTwitterX className="text-xl"></BsTwitterX> Twitter
          </span>
        </button>
      </div>
      <Link
        to={data === "login" ? "/sign-up" : "/login"}
        className="font-bold w-max mx-auto underline"
      >
        {data !== "login" ? "Login to" : "Register new"} account
      </Link>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={modalFormHandle} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form onSubmit={secoundTimeProfessionSubmit}>
            <input type="email" name="email" placeholder="Your email." className={inputstyle}/>
            <input type="text" name="profession" placeholder="Your profession name." className={inputstyle}/>
            <div className="text-center"><button type="submit" className="btn btn-success btn-sm">Submit</button></div>
          </form>
          <h1 className="text-center font-bold text-red-500 text-xl">Without submittion You will not able to login/register.</h1>
        </div>
      </dialog>
    </div>
  );
};

export default Sharedfooter;









// i have to work with other signin methods for syncying data. from line 18.