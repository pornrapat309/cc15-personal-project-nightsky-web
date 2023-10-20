import { useAuth } from "../../hooks/use-auth"

export default function PrivateInformation() {

    const {authUser} = useAuth();

    return (
        <div className="flex flex-col gap-4 w-[17rem]">
            <h1 className="font-bold">Private Information</h1>
            <div className="flex gap-4">
                <label className="w-[4.5rem]">Email</label>
                <span className="text-sm">{authUser.email ? authUser.email : 'No information'}</span>
            </div>
            <div className="flex gap-4">
                <label className="w-[4.5rem]">Mobile</label>
                <span className="text-sm">{authUser.mobile ? authUser.mobile : 'No information'}</span>
            </div>
        </div>
    )
};