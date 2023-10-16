export default function LoginInput(
    {
        placeholder, 
        type="text", 
        value, 
        onChange,
        name,
        hasError
    }) {
    return (
        <input 
        type={type}
        placeholder={placeholder}
        className={`h-full w-full bg-transparent pt-4 pb-2 text-sm font-normal text-white outline outline-0 focus:outline-0 focus:border-b-2 border-b 
        ${hasError ? 
            'border-red-500 focus:border-red-500' 
            : 'border-gray-100 focus:border-pink-600'}`}
        value={value}
        onChange={onChange}
        name={name}
        />
    )
};