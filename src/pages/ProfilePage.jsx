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

  console.log(getAllPosts);
  const getPostByUserId = getAllPosts.filter(
    (item) => item.userId === +profileId
  );
  console.log("ee", getPostByUserId);

  return (
    <div className="flex flex-col items-center h-screen">
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
          <div className="grid grid-cols-12 w-full">
            {getPostByUserId.map((el, index) => (
              <div
                key={index}
                className="grid col-span-12 sm:col-span-6 lg:col-span-4 gap-2 "
              >
                <ProfileContent profileUser={profileUser} postObj={el} />
              </div>
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
