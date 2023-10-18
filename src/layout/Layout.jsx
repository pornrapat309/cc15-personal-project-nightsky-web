import { Outlet } from "react-router-dom";
import Sidebar from '../layout/Sidebar';

export default function Layout() {
    return (
    <div className="flex bg-prussianBlue w-full h-screen">
        <Sidebar />
        <Outlet />
    </div>
    )
};