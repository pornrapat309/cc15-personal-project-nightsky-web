import Avatar from "../../components/Avatar";
import { useAuth } from "../../hooks/use-auth";
import UserInfo from "./UserInfo";

export default function ProfileInfo() {

  const {authUser} = useAuth();

  return (
    <div className="flex justify-center gap-20 w-full py-6">
      <Avatar className="h-40" src={authUser.profileImage}/>
      <UserInfo />
    </div>
  );
}
