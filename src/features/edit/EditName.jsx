import { useAuth } from "../../hooks/use-auth";

export default function EditName({ value, type = "text", setInput }) {
  const { authUser } = useAuth();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <label>Full Name</label>
        <input
          className="bg-transparent border-b-[0.05rem] border-b-gray-300 focus:outline-0"
          type={type}
          onChange={(e) => setInput(e.target.value)}
          value={value}
        />
      </div>
      <div className="flex gap-4">
        <label>Username</label>
        <span>{authUser.username}</span>
      </div>
    </div>
  );
}
