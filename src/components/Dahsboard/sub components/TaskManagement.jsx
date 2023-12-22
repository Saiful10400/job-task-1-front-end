import React, { useContext, useEffect, useState } from 'react';
import { axiosPublic } from '../../../custom Hoocks/useAxiosPublic';
import { contextProvider } from '../../../context api/Context';

const TaskManagement = () => {
    // dta fetching form database.
    const[task,setTask]=useState([])
    const {user}=useContext(contextProvider)
    useEffect(()=>{
        if(user){
            const email=user.email
            axiosPublic.post("/getAllTaskByEmail", { email })
        .then((res) => setTask(res.data));
        }
    },[user])
    console.log(task)
    const listyle="border py-2 mb-2 text-lg font-bold"
    const ulstyle="px-2"
    const parentStyle="w-full bg-white border rounded-3xl min-h-32 py-4"
    return (
        <div className='w-full h-full bg-gray-200'>
            <div className=' w-[75%] mx-auto mt-20 grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className={parentStyle}> <h1 className='text-center font-bold text-2xl mb-5'>To-do</h1>
                <ul className={ulstyle}>
                    {
                       task.filter((item)=>item.status==="To-do").map((item,idx)=>{
                            return(
                                <li className={listyle} key={idx}>{idx+=1}. {item.title}</li>
                            )
                        })
                    }
                </ul>
                  </div>
                <div className={parentStyle}> <h1 className='text-center font-bold text-2xl mb-5'>Ongoing </h1>
                <ul className={ulstyle}>
                {
                       task.filter((item)=>item.status==="Ongoing").map((item,idx)=>{
                            return(
                                <li className={listyle} key={idx}>{idx+=1}. {item.title}</li>
                            )
                        })
                    }
                </ul>
                  </div>
                <div className={parentStyle}> <h1 className='text-center font-bold text-2xl mb-5'>Completed</h1>
                <ul className={ulstyle}>
                {
                       task.filter((item)=>item.status==="Completed").map((item,idx)=>{
                            return(
                                <li className={listyle} key={idx}>{idx+=1}. {item.title}</li>
                            )
                        })
                    }
                </ul>
                  </div>
            </div>
        </div>
    );
};

export default TaskManagement;





// .map((item,idx)=>{
//     return(
//         <li className={listyle} key={idx}>{idx+=1}. {item.title}</li>
//     )
// })