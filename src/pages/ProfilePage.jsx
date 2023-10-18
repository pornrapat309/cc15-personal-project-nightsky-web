import ProfileContent from "../features/profile/ProfileContent";
import ProfileInfo from "../features/profile/ProfileInfo";

export default function ProfilePage () {
    return (
        <div className="flex flex-1 flex-col items-center justify-between">
            <ProfileInfo />
            <ProfileContent />
        </div>
    )
};