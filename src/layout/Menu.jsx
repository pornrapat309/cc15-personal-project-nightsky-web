import MenuItem from "./MenuItem";
import { PiHouseFill } from "react-icons/pi";
import { AiOutlinePlusCircle, AiOutlineStar } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import MenuProfile from "./MenuProfile";
import Dropdown from "./Dropdown";
import { useAuth } from "../hooks/use-auth";
import MenuCreate from "./MenuCreate";

export default function Menu() {
  const { pathname } = useLocation();

  const { authUser } = useAuth();

  return (
    <div className="px-3 flex flex-col justify-between gap-6">
      <MenuItem
        to="/"
        Icon={PiHouseFill}
        title="Home"
        active={pathname === "/"}
      />
      <Dropdown />
      {/* <MenuItem Icon={AiOutlineStar} title="Notification" /> */}
      <MenuCreate Icon={AiOutlinePlusCircle} title="Create" />
      <MenuProfile active={pathname === `/profile/${authUser.id}`} />
    </div>
  );
}
