import EditAvatar from "../features/edit/EditAvatar";
import EditForm from "../features/edit/EditForm";
import PrivateInformation from "../features/edit/PrivateInformation";
import ActionButton from "../features/profile/ActionButton";

export default function EditProfilePage () {
    return (
        <div className="flex flex-1 flex-col items-center justify-evenly text-white">
            <h1 className="text-3xl font-semibold">Edit profile</h1>
            <EditAvatar />
            <EditForm />
            <PrivateInformation />
            <ActionButton>Submit</ActionButton>
        </div>
    )
};