import Avatar from "../../components/Avatar";
import UserInfo from "./UserInfo";

export default function ProfileInfo({profileUser, statusWithAuthUser, setStatusWithAuthUser, countFollower, countFollowing}) {

  return (
    <div className="flex justify-center gap-20 w-full py-6">
      <Avatar className="h-40" src={profileUser.profileImage}/>
      <UserInfo 
        profileUser={profileUser} 
        statusWithAuthUser={statusWithAuthUser} 
        setStatusWithAuthUser={setStatusWithAuthUser}
        countFollower={countFollower}
        countFollowing={countFollowing}
        />
    </div>
  );
}
