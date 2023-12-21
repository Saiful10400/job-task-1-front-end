import { useContext } from "react";
import img from "../../../public/login.svg";
import SharedHeader from "./shared components/SharedHader";
import Sharedfooter from "./shared components/Sharedfooter";
import { useForm } from "react-hook-form";
import { contextProvider } from "../../context api/Context";
import { toast } from "react-toastify";

export const inputstyle =
  "w-full py-[10px] px-[12px] focus:outline-none border text-lg font-medium rounded-lg mb-3";
const Login = () => {
  const heading = "Login to account";
  const headingParagraph =
    "Access to the most powerfull tool in the entire design and web industry.";

  // react hoock form.
  const { register, handleSubmit } = useForm();

//   cosntext api data.
const{emailPasswordLogin,googleLogin,gitHubLogin,twitterLogin}=useContext(contextProvider)

//   form handle submit.

const formhandle=(data)=>{
emailPasswordLogin(data.email,data.password)
.then(()=>{
    toast("Login successfull.")
})

}

  return (
    <div className="flex flex-col lg:flex-row h-[86vh]">
      <div className="h-full w-[40%] bg-[#57d38c] flex justify-center items-center">
        <img className="w-[70%]" src={img} alt="login image." />
      </div>
      <div className="h-full w-[60%] flex justify-center items-center">
        <div className="w-[40%]">
          <SharedHeader
            heading={heading}
            paragraph={headingParagraph}
          ></SharedHeader>
          <form onSubmit={handleSubmit(formhandle)}>
            <input
              className={inputstyle}
              type="email"
              placeholder="Enter your e-mail."
              {...register("email",{required:true})}
            />
            <input
              className={inputstyle}
              type="password"
              placeholder="Enter your password."
              {...register("password",{required:true})}
            />
            <button
              type="submit"
              className="btn w-full btn-primary bg-[#57d38c] border-none text-white hover:bg-[#1d623b]"
            >
              Login
            </button>
          </form>
          <Sharedfooter data={"login"}></Sharedfooter>
        </div>
      </div>
    </div>
  );
};

export default Login;
