import { Outlet } from "react-router-dom";
import Sidebar from '../layout/Sidebar';
import Header from "./Header";

export default function Layout() {
    return (
    <div className="bg-prussianBlue w-screen h-screen">
        <Header />
        <Sidebar />
        <Outlet />
    </div>
    )
}