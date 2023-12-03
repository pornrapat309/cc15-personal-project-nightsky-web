export default function RegisterInput({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
  icon,
  hasError,
  iconPassword,
}) {
  return (
    <div className="flex items-center relative">
      <span className="absolute text-white text-opacity-60">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={`h-full w-full bg-transparent pt-3 pb-3 pl-8 text-sm font-normal text-white outline outline-0 focus:outline-0 focus:border-b-2 border-b
            ${
              hasError
                ? "border-red-500 focus:border-red-500"
                : "border-gray-100 focus:border-pink-600"
            }`}
        value={value}
        onChange={onChange}
        name={name}
      />
      <span className="absolute text-white text-opacity-60 right-2 cursor-pointer">
        {iconPassword}
      </span>
    </div>
  );
}
