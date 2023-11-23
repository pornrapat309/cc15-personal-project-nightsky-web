import PostItem from "./PostItem";

export default function PostList({ getFollowingPosts, deletePost }) {
  return (
    <div className="flex flex-col gap-4">
      {getFollowingPosts.map((el) => (
        <PostItem key={el.id} postObj={el} deletePost={deletePost} />
      ))}
    </div>
  );
}
