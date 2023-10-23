import { Link } from "react-router-dom";

export default function AuthAction() {
  return (
    <Link to="/edit">
      <button className="text-white font-semibold py-2 px-2 rounded-lg bg-gray-500 hover:bg-gray-400">
        Edit profile
      </button>
    </Link>
  );
}
