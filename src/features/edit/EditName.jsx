import { useAuth } from "../../hooks/use-auth"

export default function EditName({value, onChange, type='text', placeholder}) {
 
    const {authUser} = useAuth();

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label>Full Name</label>
                <input 
                    className="bg-transparent border-b-[0.05rem] border-b-gray-300 focus:outline-0"
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <div className="flex gap-4">
                <label>Username</label>
                <span>{authUser.username}</span>
            </div>
        </div>
    )
};