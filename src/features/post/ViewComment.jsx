import { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "../../components/Avatar";
import axios from "../../config/axios";
import { useAuth } from "../../hooks/use-auth";
import { Link } from "react-router-dom";

export default function ViewComment({ postId, image }) {
  const { authUser } = useAuth();
  const [getComment, setGetComment] = useState([]);

  console.log("aaa", authUser.id);
  useEffect(() => {
    axios
      .get(`/comment/${postId}`)
      .then((res) => {
        setGetComment(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("gg", getComment);
  return (
    <div>
      <div className="flex justify-between h-[30rem]">
        <div className="flex flex-1 flex-col justify-center items-center border border-r cursor-pointer hover:bg-secondary overflow-hidden">
          <img src={image} alt="post-pic" />
        </div>

        <div className="flex-1 overflow-auto">
          {getComment.map((el) => (
            <div key={el.id} className="flex justify-start gap-3 p-3">
              <div>
                <Link to={`/profile/${el.userId}`}>
                  <Avatar src={el.user.profileImage} />
                </Link>
              </div>
              <Link to={`/profile/${el.userId}`}>
                <div className="font-bold hover:text-gray-400">
                  {el.user.username}
                </div>
              </Link>
              <div className="flex-1 break-all">{el.message}</div>
              {el.userId === authUser.id ? (
                <div
                  className="flex items-center cursor-pointer"
                  // onClick={() => setIsOpen(true)}
                >
                  <BsThreeDots />
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
