import MenuItem from "./MenuItem";
import { PiHouseFill } from "react-icons/pi";
import { AiOutlinePlusCircle, AiOutlineStar } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import MenuProfile from "./MenuProfile";
import Dropdown from "./Dropdown";

export default function Menu() {
    const {pathname} = useLocation();
    return (
        <div className="px-3 flex flex-col justify-between">
            <MenuItem 
                to='/' 
                Icon={PiHouseFill} 
                title='Home'
                active={pathname === '/'}
                />
            <Dropdown />
            <MenuItem 
                Icon={AiOutlineStar} 
                title='Notification'/>
            <MenuItem 
                Icon={AiOutlinePlusCircle} 
                title='Create'/>
            <MenuProfile 
                active={pathname === '/profile/:profileId'}
            />
        </div>
    )
};