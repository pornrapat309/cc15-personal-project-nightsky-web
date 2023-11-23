import { useState, useEffect } from "react";
import PostList from "../features/post/PostList";
import axios from "../config/axios";

export default function HomePage() {
  const [getFollowingPosts, setGetFollowingPosts] = useState([]);

  const deletePost = async (postId) => {
    try {
      await axios.delete(`/post/${postId}`);
      setGetFollowingPosts(getAllPosts.filter((el) => el.id !== postId));
      // toast.warning("Post deleted!");
    } catch (err) {
      console.log(err);
    } finally {
      window.location.reload();
    }
  };

  useEffect(() => {
    axios
      .get("/post/following")
      .then((res) => {
        setGetFollowingPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(getFollowingPosts);
  return (
    <div className="max-w-xl mx-auto px-8 py-6 flex flex-col">
      <PostList getFollowingPosts={getFollowingPosts} deletePost={deletePost} />
    </div>
  );
}
