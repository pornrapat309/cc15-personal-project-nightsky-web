import { useState } from "react";
import Avatar from "../../components/Avatar";
import Modal from "../../components/Modal";
import EditAvatarForm from "./EditAvatarForm";
import { useRef, useEffect } from "react";

export default function EditAvatar() {
  const [isOpen, setIsOpen] = useState(false);

  const [file, setFile] = useState(null);

  return (
    <div className="flex flex-col items-center gap-2">
      {file ? (
        <Avatar className="h-20" src={URL.createObjectURL(file)} />
      ) : (
        <Avatar className="h-20" />
      )}
      <span
        className="text-sm cursor-pointer hover:text-pink-500"
        onClick={() => setIsOpen(true)}
      >
        change Profile Photo
      </span>
      <Modal
        title="Change Profile Photo"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <EditAvatarForm
          setFile={setFile}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
}
