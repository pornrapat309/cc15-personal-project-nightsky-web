export default function FollowInfo({countFollower, countFollowing}) {

    return (
        <div className="flex justify-between ">
            <div>0 Posts</div>
            <div className="cursor-pointer">{countFollower} Followers</div>
            <div className="cursor-pointer">{countFollowing} Following</div>
        </div>
    )
};