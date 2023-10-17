import { ImExit } from "react-icons/im";

export default function Logout() {
    return (
        <div className="flex mb-5 px-2 py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-50">
            <ImExit className='text-white w-7 h-7'/>
            <span className="text-white px-4">Log out</span>
        </div>
    )
}