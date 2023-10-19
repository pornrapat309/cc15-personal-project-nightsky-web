import { useAuth } from "../../hooks/use-auth"

export default function PrivateInformation() {

    const {authUser} = useAuth();

    return (
        <form className="flex flex-col gap-4 w-[17rem]">
            <h1 className="font-bold">Private Information</h1>
            <div className="flex gap-4">
                <label className="w-[4.5rem]">Email</label>
                <span>{authUser.email}</span>
            </div>
            <div className="flex gap-4">
                <label className="w-[4.5rem]">Phone</label>
                <span>{authUser.mobile}</span>
            </div>
        </form>
    )
};