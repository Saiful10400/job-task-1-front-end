
import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login and sign up components/Login";
import Signup from "./components/Login and sign up components/signup";

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
                path:"/sign-up",
                element:<Signup></Signup>
            }
        ]
    }
])