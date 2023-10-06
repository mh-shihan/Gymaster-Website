import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h2 className="text-4xl">I am from Main layout</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
