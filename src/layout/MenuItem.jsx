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
                className={`flex px-2 py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-50 ${active ? 'font-bold' : 'font-normal'}`}
                >
                <Icon className='text-white w-7 h-7'/>
                <span className="text-white px-4">{title}</span>
            </div>
        </Link>
    )
}