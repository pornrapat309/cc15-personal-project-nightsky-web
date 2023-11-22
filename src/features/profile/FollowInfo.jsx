import { useState } from "react";
import FollowersList from "./FollowersList";
import FollowingList from "./FollowingList";
import Modal from "../../components/Modal";

export default function FollowInfo({
  follower,
  following,
  getPostByRelationship,
}) {
  const [isOpenFollower, setIsOpenFollower] = useState(false);
  const [isOpenFollowing, setIsOpenFollowing] = useState(false);

  return (
    <div className="flex justify-between ">
      <div>{getPostByRelationship.length} Posts</div>
      <div>
        <div className="cursor-pointer" onClick={() => setIsOpenFollower(true)}>
          {follower.length} Followers
        </div>
        <Modal
          title="Followers"
          open={isOpenFollower}
          onClose={() => setIsOpenFollower(false)}
        >
          <FollowersList
            follower={follower}
            onClose={() => setIsOpenFollower(false)}
          />
        </Modal>
      </div>

      <div>
        <div
          className="cursor-pointer"
          onClick={() => setIsOpenFollowing(true)}
        >
          {following.length} Following
        </div>
        <Modal
          title="Following"
          open={isOpenFollowing}
          onClose={() => setIsOpenFollowing(false)}
        >
          <FollowingList
            following={following}
            onClose={() => setIsOpenFollowing(false)}
          />
        </Modal>
      </div>
    </div>
  );
}
