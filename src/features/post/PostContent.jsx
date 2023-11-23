import { useState } from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../config/axios";
import Modal from "../../components/Modal";
import CreateComment from "./CreateComment";

export default function PostContent({ postObj, postId, image, totalLike }) {
  const { authUser } = useAuth();
  const [likes, setLikes] = useState(postObj.likes);
  const [openModal, setOpenModal] = useState(false);

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
        <div className="-mx-4">
          <img src={image} alt="post" className="w-full h-full" />
        </div>
      )}
      <div className="flex gap-3">
        <div className="w-7 h-7 cursor-pointer self-center">
          <TiStarFullOutline
            className="w-full h-full"
            color={isLiked ? "yellow" : "gray"}
            onClick={handleClickLike}
          />
        </div>
        <div className="w-[1.4rem] h-[1.4rem] cursor-pointer self-center">
          <IoChatbubbleOutline
            className="w-full h-full"
            onClick={() => setOpenModal(true)}
          />
          <Modal
            maxWight={40}
            title="Comment"
            open={openModal}
            onClose={() => setOpenModal(false)}
          >
            <CreateComment
              image={image}
              postId={postId}
              onClose={() => setOpenModal(false)}
            />
          </Modal>
        </div>
      </div>
      <div>{likes.length} likes</div>
    </div>
  );
}
