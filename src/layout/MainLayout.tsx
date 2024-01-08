import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import "./layout.css";
import Topbar from "../components/Topbar/Topbar";

const MainLayout = () => {
  return (
    <div className="container">
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="main">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
