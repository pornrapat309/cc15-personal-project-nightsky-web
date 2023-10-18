export default function PrivateInformation() {
    return (
        <form className="flex flex-col gap-4 w-[17rem]">
            <h1 className="font-bold">Private Information</h1>
            <div className="flex gap-4">
                <span className="w-[4.5rem]">Email</span>
                <span>email</span>
            </div>
            <div className="flex gap-4">
                <span className="w-[4.5rem]">Phone</span>
                <span>phone</span>
            </div>
        </form>
    )
};