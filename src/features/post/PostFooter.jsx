import { useState } from "react";
import Modal from "../../components/Modal";
import ViewComment from "./ViewComment";

export default function PostFooter({ postObj, image }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex flex-col gap-2 text-white">
      <div className="flex gap-3">
        <div>{postObj.user.username}</div>
        {postObj.message && <div>{postObj.message}</div>}
      </div>
      <div className="cursor-pointer" onClick={() => setOpenModal(true)}>
        View all {postObj.totalComment} comments
      </div>
      <Modal
        maxWight={40}
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
