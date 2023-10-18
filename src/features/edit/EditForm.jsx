export default function EditInfo() {
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
                <span>Username</span>
                <span>user</span>
            </div>
        </form>
    )
};