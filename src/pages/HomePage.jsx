import { useState } from "react";
import PostList from "../features/post/PostList";
import { useEffect } from "react";
import axios from "../config/axios";

export default function HomePage() {
  const [getAllPosts, setGetAllPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/post/following")
      .then((res) => {
        setGetAllPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="max-w-xl mx-auto px-8 py-6 flex flex-col">
      <PostList getAllPosts={getAllPosts} />
    </div>
  );
}
