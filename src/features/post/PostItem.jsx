import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function PostItem({ postObj, deletePost }) {
  return (
    <div className="px-4 py-4 shadow-2xl">
      <PostHeader postObj={postObj} deletePost={deletePost} />
      <PostContent
        postObj={postObj}
        postId={postObj.id}
        image={postObj.image}
        totalLike={postObj.totalLike}
      />
      <PostFooter postObj={postObj} />
    </div>
  );
}
