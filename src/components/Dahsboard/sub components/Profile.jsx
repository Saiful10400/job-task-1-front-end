import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../custom Hoocks/useAxiosPublic";
import { contextProvider } from "../../../context api/Context";
import { reload } from "firebase/auth";
import { inputstyle } from "../../Login and sign up components/Login";

const Profile = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(contextProvider);
  // getting user data.
  const [data, setData] = useState(null);
  const [task, setTask] = useState([]);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    if (user) {
      const email = user.email;
      axiosPublic.post("/getAUser", { email }).then((res) => setData(res.data));

      // get users added task.
      axiosPublic
        .post("/getAllTaskByEmail", { email })
        .then((res) => setTask(res.data));
    }
  }, [user, axiosPublic, refetch]);

  // list styles
  const vise = "bg-gradient-to-l from-green-400 to-blue-500";
  const versa = "bg-gradient-to-l from-pink-400 to-yellow-500";

  // show more text handle.
  const [showmore, setShowmore] = useState(false);
// modal predata.
const[predata,setPredata]=useState(null)

//   modal form submit.

const modalformHandle=(e)=>{
    e.preventDefault()
    const form=e.target
    const title=form.title.value
    const description=form.description.value
    const date=form.date.value
    const time=form.time.value
    const priority=form.priority.value
    const status=form.status.value
    const id=predata._id

    // placing a post request on server.

    axiosPublic.post("/updateATaskMultipleField",{title,description,date,time,priority,status,id})
    .then(res=>{
        console.log(res.data)
        setRefetch(!refetch)
    })


}

  return (
    <div className="border w-full h-full bg-gray-200">
      {/* profile and shot description */}
      <div className="mx-auto w-[80%] mt-20  flex gap-7">
        <div className="w-[75%] rounded-3xl p-6 bg-white">
          <div className="flex flex-col">
            <div className="w-[200px] mx-auto h-[200px] border-2 object-contain rounded-full">
              <img
                className="w-full h-full object-cover rounded-full"
                src={data?.imgUrl}
                alt=""
              />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold">{data?.name}</h1>
              <h1 className="text-lg font-bold">{data?.profession}</h1>
              <h1 className="font-medium mt-6">E-mail: {data?.email}</h1>
            </div>
          </div>
        </div>
        <div className="w-[25%] rounded-3xl p-6 flex justify-center items-center bg-white">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Currently available task</div>
              <div className="stat-value text-center">{task.length}</div>
              <div className="stat-desc"></div>
            </div>
          </div>
        </div>
      </div>

      {/* my added jobs. */}

      <div className="mx-auto w-[80%] mt-10 min-h-72 pb-2 bg-white rounded-3xl">
        <h1 className="text-center font-bold text-2xl py-3 mb-3">
          My added tasks
        </h1>
        <ul className="px-3">
          {task.map((item, idx) => {
            return (
              <li
                key={idx}
                className={` p-4 flex justify-evenly items-center text-white mb-5 h-max rounded-xl ${
                  idx % 2 == 0 ? vise : versa
                }`}
              >
                <div className=" h-full w-96 flex justify-center items-center flex-col">
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <h1>
                    {item.date} at {item.time}
                  </h1>
                  <h1 className="mt-5 font-bold">
                    <span className="bg-orange-500 p-2 rounded-xl">
                      {item.priority}
                    </span>{" "}
                    <span className="bg-[#4adc82] p-2 rounded-xl">
                      {item.status}
                    </span>
                  </h1>
                </div>
                <p className="w-full border-x-2 h-full px-2">
                  {!showmore
                    ? item.description.slice(0, 180)
                    : item.description}{" "}
                  <button
                    onClick={() => setShowmore(!showmore)}
                    className={`${
                      item.description.length <= 180 ? "hidden" : ""
                    } font-bold text-gray-600`}
                  >
                    ...{!showmore ? "show more" : "show less"}
                  </button>
                </p>
                <div className=" h-full w-80 flex justify-center items-center flex-col lg:flex-row gap-2">
                  <button
                    onClick={() =>{
                        setPredata(item)
                      document.getElementById("my_modal_3").showModal()}
                    }
                    className="btn text-gray-800 btn-sm btn-success"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      const id = item._id;
                      axiosPublic.post("/deleteATask", { id }).then((res) => {
                        console.log(res.data);
                        setRefetch(!refetch);
                      });
                    }}
                    className="btn text-gray-800 btn-sm btn-warning"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center">Edit!</h3>
          <form onSubmit={modalformHandle}>
            <input required type="text" className={inputstyle} name="title" placeholder="enter title." defaultValue={predata?.title}/>
            <textarea required className={inputstyle} name="description" placeholder="enter description" defaultValue={predata?.description}/>
            <div>
              <h1 className="text-center font-bold text-xl">Deadline</h1>
              <div className="flex items-center gap-3">
                <input required type="date" className={inputstyle} name="date" defaultValue={predata?.date}/>
                <input required type="time" className={inputstyle} name="time" defaultValue={predata?.time}/>
              </div>
            </div>
            <select required className={inputstyle} name="priority">
              <option disabled selected>
                Select Priority
              </option>
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>
            <select required className={inputstyle} name="status">
              <option disabled selected>
                Select status
              </option>
              <option value="To-do">To-do</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
            <button className="btn btn-success btn-sm w-full">Submit</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
