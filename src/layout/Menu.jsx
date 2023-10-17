import MenuItem from "./MenuItem";
import { PiHouseFill } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineStar } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import MenuProfile from "./MenuProfile";

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
            <MenuItem 
                Icon={BiSearch} 
                title='Search'/>
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