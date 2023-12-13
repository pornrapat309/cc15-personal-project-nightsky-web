import { useState } from "react";
import Modal from "../../components/Modal";
import ViewComment from "./ViewComment";
import { Link } from "react-router-dom";

export default function PostFooter({ postObj, image }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex flex-col gap-2 text-white">
      <div className="flex gap-3">
        <div className="font-semibold">
          <Link
            to={`/profile/${postObj.user.id}`}
            className="hover:text-gray-400"
          >
            {postObj.user.username}
          </Link>
        </div>
        {postObj.message && <div>{postObj.message}</div>}
      </div>
      <div className="cursor-pointer" onClick={() => setOpenModal(true)}>
        View all {postObj.comments.length} comments
      </div>
      <Modal
        maxWight={60}
        title="View comments"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <ViewComment
          postObj={postObj}
          postId={postObj.id}
          image={image}
          onClose={() => setOpenModal(false)}
        />
      </Modal>
    </div>
  );
}
