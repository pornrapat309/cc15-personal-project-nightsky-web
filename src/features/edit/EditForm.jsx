import { useAuth } from "../../hooks/use-auth"

export default function EditInfo() {

    const {authUser} = useAuth();

    return (
        <form className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label>Full Name</label>
                <input 
                    type="text"
                    className="bg-transparent border-b-[0.05rem] border-b-gray-300 focus:outline-0"
                />
            </div>
            <div className="flex gap-4">
                <label>Username</label>
                <span>{authUser.username}</span>
            </div>
        </form>
    )
};