import EditAvatar from "../features/edit/EditAvatar";
import EditName from "../features/edit/EditName";
import PrivateInformation from "../features/edit/PrivateInformation";
import FormButton from "../features/edit/FormButton";
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import Loading from "../components/Loading";

export default function EditProfilePage() {

  const [input, setInput] = useState({})

  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null);

  const { updateProfileImage, authUser } = useAuth();

//   const handleChangeInput = e => {
//     setInput({...input, [e.target.name]: e.target.value})
// };


  const handleFormSubmit = async (e)=>{
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append('profileImage', file)
      setLoading(true)
      await updateProfileImage(formData);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  // const handleFormSubmit = async (e)=>{
  //   e.preventDefault()
  //   try {
  //     if (file) {
  //       const formData = new FormData();
  //       formData.append('profileImage', file)
  //       setLoading(true)
  //       await updateProfileImage(formData);
  //     }
  //     if (input) {
  //       updateProfileFullName(input)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-1 flex-col items-center justify-evenly text-white" >
      {loading && <Loading />}
      <h1 className="text-3xl font-semibold">Edit profile</h1>
        <EditAvatar file={file} setFile={setFile}/>
        <EditName  type='text' placeholder={authUser.fullName}/>
        <PrivateInformation />
        <FormButton >Submit</FormButton>
    </form>
  );
}
