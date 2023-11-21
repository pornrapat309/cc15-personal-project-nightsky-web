import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";

export default function Layout() {
  return (
    <div className="flex bg-primary bg-cover w-screen overflow-x-hidden h-screen">
      <Sidebar />
      <div className="flex-1 ml-[16rem] h-full ">
        <Outlet />
      </div>
    </div>
  );
}
