import { useState } from "react";
import Modal from "../../components/Modal";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";

export default function RelationshipAction({ setStatusWithAuthUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const { profileId } = useParams();

  const handleClickUnfollow = async () => {
    try {
      await axios.delete(`/follow/${profileId}/unfollow`);
      setStatusWithAuthUser("FOLLOWER");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        className="text-white font-semibold py-2 px-2 rounded-lg bg-gray-500 hover:bg-gray-400"
        onClick={() => setIsOpen(true)}
      >
        Following
      </button>
      <Modal title="Following" open={isOpen} onClose={() => setIsOpen(false)}>
        <div
          className="flex justify-center border-b p-3 border-gray-400 min-w-full text-red-500 font-semibold cursor-pointer hover:bg-secondary"
          onClick={handleClickUnfollow}
          onClose={() => setIsOpen(false)}
        >
          Unfollow
        </div>
      </Modal>
    </>
  );
}
