import FollowInfo from "./FollowInfo";
import AuthAction from "./AuthAction";
import UnknownAction from "./UnknownAction";
import FollowingAction from "./FollowingAction";
import FollowerAction from "./FollowerAction";
import RelationshipAction from "./RelationshipAction";

export default function UserInfo({
  profileUser,
  statusWithAuthUser,
  setStatusWithAuthUser,
  follower,
  following,
  getPostByRelationship,
}) {
  const mappingObj = {
    AUTH_USER: <AuthAction />,
    UNKNOWN: <UnknownAction setStatusWithAuthUser={setStatusWithAuthUser} />,
    FOLLOWING: (
      <FollowingAction setStatusWithAuthUser={setStatusWithAuthUser} />
    ),
    FOLLOWER: <FollowerAction setStatusWithAuthUser={setStatusWithAuthUser} />,
    INRELATIONSHIP: (
      <RelationshipAction setStatusWithAuthUser={setStatusWithAuthUser} />
    ),
  };

  return (
    <div className="flex flex-col justify-evenly w-80 text-white">
      <div className="flex items-center gap-8">
        <div className="text-xl">{profileUser.username}</div>
        {mappingObj[statusWithAuthUser]}
      </div>
      <FollowInfo
        follower={follower}
        following={following}
        setStatusWithAuthUser={setStatusWithAuthUser}
        getPostByRelationship={getPostByRelationship}
      />
      <div>{profileUser.fullName}</div>
    </div>
  );
}
