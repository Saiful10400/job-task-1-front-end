import Navbar from "./sharedComponents/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./sharedComponents/Footer";

const Root = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-[86vh] ">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
