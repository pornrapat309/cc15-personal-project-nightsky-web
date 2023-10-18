import EditAvatar from "../features/edit/EditAvatar";

export default function EditProfilePage () {
    return (
        <div className="flex flex-1 flex-col items-center justify-evenly text-white">
            <h1 className="text-3xl font-semibold">Edit profile</h1>
            <EditAvatar />
            <div>content</div>
            <div>private</div>
            <div>button</div>
        </div>
    )
};