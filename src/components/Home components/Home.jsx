import React from 'react';
import "./home.css"
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <div className='lg:w-[1400px] mx-auto'>
           {/* banner */}
           <div className='banner border-2 min-h-[50vh] relative'>
            <div className='w-full flex justify-start items-center  h-full absolute bg-gradient-to-r from-[#141414d1] to-[#36363600]'>
                <NavLink to={"/dashboard/task_manager"} className='btn ml-12 btn-secondary text-xl font-bold bg-[#57d38c] border-none'>Let’s Explore</NavLink>
                
            </div>

           </div>
        </div>
    );
};

export default Home;