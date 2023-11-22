import PostItem from "./PostItem";

export default function PostList({ getAllPosts, deletePost }) {
  return (
    <div className="flex flex-col gap-4">
      {getAllPosts.map((el) => (
        <PostItem key={el.id} postObj={el} deletePost={deletePost} />
      ))}
    </div>
  );
}
