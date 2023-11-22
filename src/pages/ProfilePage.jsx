import { useParams } from "react-router-dom";
import ProfileContent from "../features/profile/ProfileContent";
import ProfileInfo from "../features/profile/ProfileInfo";
import { useState, useEffect } from "react";
import axios from "../config/axios";

export default function ProfilePage() {
  const [profileUser, setProfileUser] = useState({});
  const [statusWithAuthUser, setStatusWithAuthUser] = useState("");
  const [follower, setFollower] = useState([]);
  const [following, setFollowing] = useState([]);
  const [getAllPosts, setGetAllPosts] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    axios
      .get(`/user/${profileId}`)
      .then((res) => {
        setProfileUser(res.data.user);
        setStatusWithAuthUser(res.data.status);
        setFollower(res.data.follower);
        setFollowing(res.data.following);
      })
      .catch((err) => console.log(err));
  }, [profileId]);

  useEffect(() => {
    axios
      .get("/post/following")
      .then((res) => {
        setGetAllPosts(res.data.posts);
        console.log(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center justify-between h-screen">
      {profileUser ? (
        <>
          <div>
            <ProfileInfo
              profileUser={profileUser}
              statusWithAuthUser={statusWithAuthUser}
              setStatusWithAuthUser={setStatusWithAuthUser}
              follower={follower}
              following={following}
            />
          </div>
          <div>
            {getAllPosts.map((el) => (
              <ProfileContent
                profileUser={profileUser}
                key={el.id}
                postObj={el}
              />
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-center text-red-600 p-8 text-3xl font-bold">
          404 !!! user not found
        </h1>
      )}
    </div>
  );
}
