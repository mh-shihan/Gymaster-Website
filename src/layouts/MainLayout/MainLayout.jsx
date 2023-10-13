import { Outlet } from "react-router-dom";
import Navbar from "../../Header/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
