import { useContext, useState } from "react";
import img from "../../../public/login.svg";
import { inputstyle } from "./Login";
import SharedHeader from "./shared components/SharedHader";
import Sharedfooter from "./shared components/Sharedfooter";
import { useForm } from "react-hook-form";
import { contextProvider } from "../../context api/Context";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase credentials/firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "../../custom Hoocks/useAxiosPublic";
const Signup = () => {
  const axiosPublic=useAxiosPublic()
  // shared component paramitre.
  const heading = "Register new account";
  const headingParagraph =
    "Access to the most powerfull tool in the entire design and web industry.";

  // react hoocks form
  const { register, handleSubmit } = useForm();

  //   context api data.
  const { emailPasswordSignin } = useContext(contextProvider);

  // profile photo handle.
  const [profile, setProfile] = useState(null);
  const profilephotoHandle = (e) => {
    const file = e.target.files[0];
    setProfile(file);
  };

  //   form submit handle

  const formHandle = (data) => {
    emailPasswordSignin(data.email, data.password).then(() => {
      const formdata = new FormData();
      formdata.append("image", profile);
      const imgbburl = `https://api.imgbb.com/1/upload?key=31b593450ce77668d753d9c877389f71`;
      fetch(imgbburl, { method: "POST", body: formdata })
        .then((res) => res.json())
        .then((res) => {
          const photourl = res.data.url;

          const userNewdata = { displayName: data.name, photoURL: photourl };
          updateProfile(auth.currentUser, userNewdata).then(() => {
           
            // adding user into mongodb

            axiosPublic.post("/addAUser",{name:data.name,email:data.email,password:data.password,imgUrl:photourl,profession:data.profession})
            .then(res=>{
              console.log(res.data)
               toast("Registration successfull.");
            })
            
          });
        });
    });
  };

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
          <form onSubmit={handleSubmit(formHandle)}>
            <input
              {...register("name", { required: true })}
              className={inputstyle}
              type="text"
              placeholder="Enter your name."
            />
            <input
              {...register("profession", { required: true })}
              className={inputstyle}
              type="text"
              placeholder="Enter your profession."
            />
            <input
              {...register("email", { required: true })}
              className={inputstyle}
              type="email"
              placeholder="Enter your e-mail."
            />
            <input
              {...register("password", { required: true })}
              className={inputstyle}
              type="password"
              placeholder="Enter your password."
            />
            <div className={inputstyle}>
              <h1 htmlFor="file">Upload profiile photo.</h1>
              <input onInput={profilephotoHandle} id="file" type="file" />
            </div>
            <button
              type="submit"
              className="btn w-full btn-primary bg-[#57d38c] border-none text-white hover:bg-[#1d623b]"
            >
              Register
            </button>
          </form>
          <Sharedfooter data={"register"}></Sharedfooter>
        </div>
      </div>
    </div>
  );
};

export default Signup;
