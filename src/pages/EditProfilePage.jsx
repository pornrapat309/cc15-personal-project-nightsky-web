import EditAvatar from "../features/edit/EditAvatar";
import EditName from "../features/edit/EditName";
import PrivateInformation from "../features/edit/PrivateInformation";
import FormButton from "../features/edit/FormButton";
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import Loading from "../components/Loading";

export default function EditProfilePage() {
  const { updateProfile, authUser } = useAuth();

  const [input, setInput] = useState(authUser.fullName);

  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState(null);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (file) {
        formData.append("profileImage", file);
      }
      if (input) {
        formData.append("fullName", input);
      }
      setLoading(true);
      await updateProfile(formData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-1 flex-col items-center justify-evenly text-white h-screen"
    >
      {loading && <Loading />}
      <h1 className="text-3xl font-semibold">Edit profile</h1>
      <EditAvatar file={file} setFile={setFile} />
      <EditName
        type="text"
        value={input}
        onChange={handleChangeInput}
        setInput={setInput}
      />
      <PrivateInformation />
      <FormButton>Submit</FormButton>
    </form>
  );
}
