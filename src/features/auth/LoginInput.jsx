export default function LoginInput({placeholder, type="text", value, onChange}) {
    return (
        <input 
        type={type}
        placeholder={placeholder}
        className="h-full w-full border-b bg-transparent pt-4 pb-2 text-sm font-normal text-white outline outline-0 focus:border-pink-500 focus:outline-0"
        value={value}
        onChange={onChange}
        />
    )
};