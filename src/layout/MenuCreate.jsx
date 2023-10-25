import { useState } from "react";
import Modal from "../components/Modal";
import CreatePost from "../features/post/CreatePost";

export default function MenuCreate({ Icon, active }) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <div
            className={`flex px-2 py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-50 cursor-pointer ${
                active ? "text-white font-extrabold" : "font-normal text-gray-200"
            }`}
            onClick={() => setIsOpen(true)}
            >
            <Icon className="w-7 h-7" />
            <span className="px-4">Create</span>
        </div>
        
        <Modal
            maxWight={40}
            title="Create post"
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <CreatePost onClose={() => setIsOpen(false)}/>
        </Modal>
    </>
  );
}
