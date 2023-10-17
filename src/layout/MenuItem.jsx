import { Link } from "react-router-dom";

export default function MenuItem({
    to,
    Icon,
    title,
    active
}) {
    return (
        <Link to={to}>
            <div 
                className={`flex px-2 py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-50 ${active ? 'text-white font-extrabold' : 'font-normal text-gray-200'}`}
                >
                <Icon className='w-7 h-7'/>
                <span className="px-4">{title}</span>
            </div>
        </Link>
    )
}