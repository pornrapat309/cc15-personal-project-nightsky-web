export default function LoginInput({placeholder, type="text"}) {
    return (
        <input 
        type={type}
        placeholder={placeholder}
        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
    )
}