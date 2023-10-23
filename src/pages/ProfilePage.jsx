import { useParams } from "react-router-dom";
import ProfileContent from "../features/profile/ProfileContent";
import ProfileInfo from "../features/profile/ProfileInfo";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../config/axios";

export default function ProfilePage() {
  const [profileUser, setProfileUser] = useState({});
  const [statusWithAuthUser, setStatusWithAuthUser] = useState('');
  const [countFollower, setCountFollower] = useState([]);
  const [countFollowing, setCountFollowing] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    axios
      .get(`/user/${profileId}`)
      .then((res) => {
        setProfileUser(res.data.user)
        setStatusWithAuthUser(res.data.status);
        setCountFollower(res.data.countFollower)
        setCountFollowing(res.data.countFollowing)
      })
      .catch((err) => console.log(err));
  }, [profileId]);
  return (
    <div className="flex flex-1 flex-col items-center justify-between">
      {profileUser ? (
        <>
          <ProfileInfo 
            profileUser={profileUser} 
            statusWithAuthUser={statusWithAuthUser} 
            setStatusWithAuthUser={setStatusWithAuthUser} 
            countFollower={countFollower}
            countFollowing={countFollowing}
            />
          <ProfileContent />
        </>
      ) : (
        <h1 className="text-center text-red-600 p-8 text-3xl font-bold">404 !!! user not found</h1>
      )}
    </div>
  );
}
