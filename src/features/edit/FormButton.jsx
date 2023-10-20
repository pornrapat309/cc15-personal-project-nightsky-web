export default function FormButton({children}) {
    return (
        <button type="submit" 
        className="text-white font-semibold py-2 px-2 rounded-lg bg-gray-500 hover:bg-gray-400"
        >
            {children}
        </button>
    )
};