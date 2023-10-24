import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

export default function FolloweingList({ following, onClose }) {

  return (
    <div>
      <div className="flex flex-col h-72 overflow-auto" onClick={onClose}>
        {following.map((el) => (
            <Link
            className="flex justify-start items-center gap-32 my-2 mx-3"
            key={el.id}
            to={`/profile/${el.id}`}
          >
            <Avatar className="h-14" key={el.id} src={el.profileImage} />
            <div>{el.username}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
