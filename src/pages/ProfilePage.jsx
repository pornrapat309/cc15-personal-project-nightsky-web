import { useParams } from "react-router-dom";
import ProfileContent from "../features/profile/ProfileContent";
import ProfileInfo from "../features/profile/ProfileInfo";
import { useState, useEffect } from "react";
import axios from "../config/axios";

export default function ProfilePage() {
  const [profileUser, setProfileUser] = useState({});
  const [statusWithAuthUser, setStatusWithAuthUser] = useState('');
  const [follower, setFollower] = useState([]);
  const [following, setFollowing] = useState([]);
  // const [followList, setFollowList] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    axios
      .get(`/user/${profileId}`)
      .then((res) => {
        setProfileUser(res.data.user)
        setStatusWithAuthUser(res.data.status)
        setFollower(res.data.follower)
        setFollowing(res.data.following)
        // setFollowList(res.data.follows)
      })
      .catch((err) => console.log(err));
  }, [profileId]);

  return (
    <div className="flex flex-1 flex-col items-center justify-between h-screen">
      {profileUser ? (
        <>
          <ProfileInfo 
            profileUser={profileUser} 
            statusWithAuthUser={statusWithAuthUser} 
            setStatusWithAuthUser={setStatusWithAuthUser} 
            follower={follower}
            following={following}
            />
          <ProfileContent />
        </>
      ) : (
        <h1 className="text-center text-red-600 p-8 text-3xl font-bold">404 !!! user not found</h1>
      )}
    </div>
  );
}
