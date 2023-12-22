
import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login and sign up components/Login";
import Signup from "./components/Login and sign up components/signup";
import Dashboard from "./components/Dahsboard/Dashboard";
import TaskManagement from "./components/Dahsboard/sub components/TaskManagement";
import Profile from "./components/Dahsboard/sub components/Profile";
import CreateTask from "./components/Dahsboard/sub components/CreateTask";
import Home from "./components/Home components/Home";
import PrivateRoute from "./components/PrivateRoute";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/sign-up",
                element:<Signup></Signup>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:"task_manager",
                element:<TaskManagement></TaskManagement>
            },
            {
                path:"Profile",
                element:<Profile></Profile>
            },
            {
                path:"Create_task",
                element:<CreateTask></CreateTask>
            }
        ]
    }
])