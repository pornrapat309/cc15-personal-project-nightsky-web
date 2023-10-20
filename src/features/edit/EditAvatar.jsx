import { useState } from "react";
import Avatar from "../../components/Avatar";
import Modal from "../../components/Modal";
import EditAvatarForm from "./EditAvatarForm";
import { useAuth } from "../../hooks/use-auth";

export default function EditAvatar({file, setFile}) {
  const [isOpen, setIsOpen] = useState(false);


  const { authUser } = useAuth();

  return (
    <div className="flex flex-col items-center gap-2">
      {file ? (
        <Avatar className="h-20" src={URL.createObjectURL(file)} />
      ) : (
        <Avatar className="h-20" src={authUser.profileImage}/>
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
          file={file}
          setFile={setFile}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
}
