import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function MenuProfile({active}) {

    const {authUser} = useAuth();

    return (
        <Link to={`/profile/${authUser.id}`}>
            <div 
                className={`flex px-2 py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-50 ${active ? 'text-white font-extrabold' : 'font-normal text-gray-200'}`}
                >
                <Avatar src={authUser.profileImage}/>
                <span className="px-4">Profile</span>
            </div>
        </Link>
    )
};