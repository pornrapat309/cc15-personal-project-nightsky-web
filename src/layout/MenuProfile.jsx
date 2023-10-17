import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";

export default function MenuProfile({active}) {
    return (
        <Link to='/profile/:profileId'>
            <div 
                className={`flex px-2 py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-50 ${active ? 'text-white font-extrabold' : 'font-normal text-gray-200'}`}
                >
                <Avatar />
                <span className="px-4">Profile</span>
            </div>
        </Link>
    )
};