import { Outlet } from "react-router-dom";
import Sidebar from '../layout/Sidebar';

export default function Layout() {
    return (
    <>
        <Sidebar/>
        <Outlet/>
    </>
    )
}