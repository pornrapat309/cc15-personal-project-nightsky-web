import { Link } from "react-router-dom";
import Menu from "./Menu";
import Logout from "./Logout";

export default function Sidebar() {
  return (
    <div className="flex flex-col fixed w-64 border-r-[0.05rem] border-r-gray-600 h-screen">
      <div className="justify-self-start">
        <Link to="/">
          <img src="/src/assets/logo2.png" alt="logo" className="h-28" />
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full text-lg">
        <Menu />
      </div>
      <div className="px-3 mb-5 flex flex-col text-lg">
        <Logout />
      </div>
    </div>
  );
}
