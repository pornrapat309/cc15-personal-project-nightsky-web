import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import ActionButton from "./ActionButton";
import FollowInfo from "./FollowInfo";

export default function UserInfo() {
    const { authUser } = useAuth();
    return (
        <div className="flex flex-col justify-evenly w-80 text-white">
            <div className="flex items-center gap-8">
                <div className="text-xl">{authUser.username}</div>
                <Link to='/edit'>
                    <ActionButton>Edit profile</ActionButton>
                </Link>
            </div>
            <FollowInfo />
            <div>Full name</div>
        </div>
    )
};