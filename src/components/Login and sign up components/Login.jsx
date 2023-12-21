import React from 'react';
import img from "../../../public/login.svg"
import SharedHeader from './shared components/SharedHader';
export const inputstyle="w-full py-[10px] px-[12px] focus:outline-none border text-lg font-medium rounded-lg mb-3"
const Login = () => {
    const heading="Login to account"
    const headingParagraph="Access to the most powerfull tool in the entire design and web industry."

    return (
        <div className='flex flex-col lg:flex-row h-[86vh]'>
            <div className='h-full w-[40%] bg-[#57d38c] flex justify-center items-center'>
                <img className='w-[70%]' src={img} alt="login image." />
            </div>
            <div className='h-full w-[60%] flex justify-center items-center'>
                <div className='w-[40%]'>
                    <SharedHeader heading={heading} paragraph={headingParagraph} ></SharedHeader>
                    <form>
                    <input className={inputstyle}   type="text" placeholder='Enter your e-mail.' />
                    <input className={inputstyle}  type="password" placeholder='Enter your password.' />
                    <button type='submit' className='btn btn-primary bg-[#57d38c] border-none text-white hover:bg-[#1d623b]'>Login</button>
                </form>
                </div>
                
            </div>
        </div>
    );
};

export default Login;