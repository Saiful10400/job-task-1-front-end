import React, { useContext } from "react";
import { useForm } from "react-hook-form"
import { inputstyle } from "../../Login and sign up components/Login";
import { axiosPublic } from "../../../custom Hoocks/useAxiosPublic";
import { contextProvider } from "../../../context api/Context";

const CreateTask = () => {
    
  const { register, handleSubmit } = useForm();
  const {user}=useContext(contextProvider)

//   form handel
const formHandle=(data)=>{
    const title=data.title
    const description=data.description
    const date=data.date
    const time=data.time
    const priority=data.priority
    const status=data.status
    
    if(user){
        const email=user.email

        axiosPublic.post("/postATask",{title,description,date,time,priority,email,status})
    .then(res=>console.log(res.data))
    }

}
  return (
    <div className="w-full h-full bg-gray-200 flex justify-center items-center">
      <form onSubmit={handleSubmit(formHandle)} className="lg:w-[40%] bg-white p-5 rounded-3xl">
        <input {...register("title",{required:true})}
          type="text"
          className={inputstyle + " " + "bg-gray-200 rounded-lg"}
          placeholder="Task title"
        />
        <textarea {...register("description",{required:true})}
          className={inputstyle + " " + "bg-gray-200 rounded-lg"}
          placeholder="Task descriptions"
        />
        <div>
          <h1 className="text-center text-xl">Deadlines</h1>
          <div className="flex gap-3 mt-2">
            <input {...register("date",{required:true})}
              type="date"
              className={inputstyle + " " + "bg-gray-200 rounded-lg"}
              placeholder="Task title"
            />
            <input {...register("time",{required:true})}
              type="time"
              className={inputstyle + " " + "bg-gray-200 rounded-lg"}
              placeholder="Task title"
            />
          </div>
        </div>
        <select {...register("priority",{required:true})} className={inputstyle + " " + "bg-gray-200 rounded-lg"}>
          <option disabled selected>
            Select Priority
          </option>
          <option value="High">High</option>
          <option value="Moderate">Moderate</option>
          <option value="Low">Low</option>
        </select>
        <select {...register("status",{required:true})} className={inputstyle + " " + "bg-gray-200 rounded-lg"}>
          <option disabled selected>
            Select status
          </option>
          <option value="To-do">To-do</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
        </select>
        <button className="btn btn-success btn-md bg-[#57d38c] border-none text-white w-full">
          Add task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
