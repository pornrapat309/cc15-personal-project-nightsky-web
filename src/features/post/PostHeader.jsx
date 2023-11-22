import { Link } from "react-router-dom";
import { useState } from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import Avatar from "../../components/Avatar";
import Modal from "../../components/Modal";

export default function PostHeader({ postObj, deletePost }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickDelete = () => {
    deletePost(postObj.id);
  };

  return (
    <>
      <div className="flex gap-3">
        <Link to={`/profile/${postObj.user.id}`}>
          <Avatar src={postObj.user.profileImage} className="h-10" />
        </Link>
        <div className="flex items-center gap-1 flex-1">
          <Link to={`/profile/${postObj.user.id}`} className="text-white">
            {postObj.user.username}
          </Link>
          <BsDot className="fill-gray-400" />
          <span className="text-gray-300">1d</span>
        </div>
        <div
          className="flex items-center text-white cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <BsThreeDots />
        </div>
      </div>
      <Modal title="Manage post" open={isOpen} onClose={() => setIsOpen(false)}>
        <div onClose={() => setIsOpen(false)}>
          <div
            className="flex justify-center border-b p-3 border-gray-400 min-w-full text-red-500 font-semibold cursor-pointer hover:bg-secondary"
            onClick={handleClickDelete}
          >
            Delete
          </div>
          <div className="flex justify-center border-b p-3 border-gray-400 min-w-full cursor-pointer hover:bg-secondary">
            Edit
          </div>
        </div>
      </Modal>
    </>
  );
}
