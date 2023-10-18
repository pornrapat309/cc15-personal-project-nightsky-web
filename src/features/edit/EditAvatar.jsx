import Avatar from "../../components/Avatar";

export default function EditAvatar() {
    return (
        <div className="flex flex-col items-center gap-2">
            <Avatar className='h-20'/>
            <span className="text-sm cursor-pointer">Change Profile Photo</span>
        </div>
    )
};