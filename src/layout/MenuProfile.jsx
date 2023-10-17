import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";

export default function MenuProfile() {
    return (
        <Link
            to='/profile/:profileId'
        >
            <div 
                className="px-2 py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-50"
                >
                <Avatar />
                <span className="text-white px-4">Profile</span>
            </div>
        </Link>
    )
};