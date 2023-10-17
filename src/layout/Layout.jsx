import { Outlet } from "react-router-dom";
import Sidebar from '../layout/Sidebar';

export default function Layout() {
    return (
    <div className="bg-prussianBlue w-screen h-screen flex">
            <Sidebar />
            <Outlet />
    </div>
    )
};