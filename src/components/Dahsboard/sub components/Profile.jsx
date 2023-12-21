import React, { useContext, useEffect, useState } from 'react';
import useAxiosPublic from '../../../custom Hoocks/useAxiosPublic';
import { contextProvider } from '../../../context api/Context';

const Profile = () => {
    const axiosPublic=useAxiosPublic()
    const {user}=useContext(contextProvider)
    // getting user data.
    const[data,setData]=useState(null)
    useEffect(()=>{
       if(user){
        const email=user.email
        axiosPublic.post("/getAUser",{email})
        .then(res=>setData(res.data))
       }
    },[user,axiosPublic])
    console.log(data)
    return (
        <div className='border w-full h-full bg-gray-200'>
            {/* profile and shot description */}
            <div className='mx-auto w-[80%] mt-20  flex gap-7'>
                <div className='w-[75%] rounded-3xl p-6 bg-white'>
                    <div className='flex flex-col'>
                        <div  className='w-[200px] mx-auto h-[200px] border-2 object-contain rounded-full'>
                        <img className='w-full h-full object-cover rounded-full' src={data?.imgUrl} alt="" />
                        </div>
                        <div className='text-center'>
                            <h1 className='text-3xl font-bold'>{data?.name}</h1>
                            <h1 className='text-lg font-bold'>{data?.profession}</h1>
                            <h1 className='font-medium mt-6'>E-mail: {data?.email}</h1>
                        </div>
                    </div>
                </div>
                <div className='w-[25%] rounded-3xl p-6 bg-white'></div>
            </div>

        </div>
    );
};

export default Profile;