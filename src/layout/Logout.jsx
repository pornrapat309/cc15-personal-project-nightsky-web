import { useAuth } from "../hooks/use-auth";
import { ImExit } from "react-icons/im";

export default function Logout() {
    const { logout } = useAuth();
    return (
        <div 
            className="flex text-white px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:bg-opacity-50"
            onClick={logout}
            >
                <ImExit className='w-7 h-7'/>
                <span className="px-4">Log out</span>
        </div>
    )
};