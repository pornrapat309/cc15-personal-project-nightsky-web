import { Link } from "react-router-dom";
import Menu from "./Menu";
import Logout from "./Logout";

export default function Sidebar() {
    return (
        <div className="grid grid-3 w-64 border-r-[0.05rem]">
            <div>
                <Link to='/'>
                    <img src="/src/assets/logo2.png" alt="logo" className="h-28"/>
                </Link>
            </div>
                <Menu />
            <div className="px-3 mb-5 flex flex-col self-end">
                <Logout />
            </div>
        </div>
    )
};