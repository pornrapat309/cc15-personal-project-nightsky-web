export default function ActionButton({children}) {
    return (
        <button 
        className="text-white font-normal py-2 px-2 rounded-lg bg-gray-500 hover:bg-gray-400"
        >
            {children}
        </button>
    )
};