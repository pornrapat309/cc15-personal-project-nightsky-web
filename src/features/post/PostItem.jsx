import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function PostItem({ postObj, deletePost }) {
  return (
    <div className="px-4 py-4 shadow-2xl">
      <PostHeader postObj={postObj} deletePost={deletePost} />
      <PostContent image={postObj.image} totalLike={postObj.totalLike} />
      <PostFooter
        username={postObj.user.username}
        message={postObj.message}
        totalComment={postObj.totalComment}
      />
    </div>
  );
}
