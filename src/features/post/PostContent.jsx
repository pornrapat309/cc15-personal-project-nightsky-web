import { useState } from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../config/axios";

export default function PostContent({ postObj, image, totalLike }) {
  const postId = postObj.id;
  const { authUser } = useAuth();
  const [likes, setLikes] = useState(postObj.likes);

  const isLiked = likes.find((el) => el.userId === authUser.id);

  const handleClickLike = async () => {
    try {
      await axios.post(`/post/${postId}/like`);
      if (isLiked) {
        return setLikes(likes.filter((el) => el.userId !== authUser.id));
      }
      setLikes([...likes, { userId: authUser.id }]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="py-3 flex flex-col gap-2 text-white">
      {image && (
        <div className="-mx-4 h-[22rem]">
          <img src={image} alt="post" className="w-full h-full" />
        </div>
      )}
      <div className="flex gap-3">
        <TiStarFullOutline
          className="w-7 h-7 cursor-pointer self-center"
          color={isLiked ? "yellow" : "gray"}
          onClick={handleClickLike}
        />
        <IoChatbubbleOutline className="w-[1.35rem] h-[1.35rem] cursor-pointer self-center" />
      </div>
      <div>{likes.length} likes</div>
    </div>
  );
}
