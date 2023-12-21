import ReactDOM from "react-dom/client";
import "./index.css";
import Context from "./context api/Context.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from "./RouterProvider.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={router}></RouterProvider>
  </Context>
);
