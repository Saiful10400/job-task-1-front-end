import { useContext } from "react";
import { contextProvider } from "../context api/Context";
import { Navigate } from "react-router-dom";
import Loading from "../Loading";

const PrivateRoute = ({children}) => {
  const { user,loading } = useContext(contextProvider);

  if(user){
    return children
  }
  else if(loading){
    return <Loading></Loading>
  }
  return <Navigate to={"/"}></Navigate>
 
};

export default PrivateRoute;
