import Avatar from "../../components/Avatar";
import UserInfo from "./UserInfo";

export default function ProfileInfo() {
  return (
    <div className="flex justify-center gap-20 w-full py-6">
      <Avatar className="h-40" />
      <UserInfo />
    </div>
  );
}