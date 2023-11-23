import { useState } from "react";
import Avatar from "../../components/Avatar";
import { useEffect } from "react";
import axios from "../../config/axios";

export default function ViewComment({ postId, image }) {
  const [getComment, setGetComment] = useState([]);
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
  return (
    <div>
      <div className="flex justify-between h-80">
        <div className="flex flex-1 flex-col justify-center items-center border border-r cursor-pointer hover:bg-secondary overflow-hidden">
          <img src={image} alt="post-pic" />
        </div>

        <div className="flex-1">
          {getComment.map((el) => (
            <div key={el.id} className="flex justify-start gap-3 p-3">
              <div>
                <Avatar src={el.user.profileImage} />
              </div>
              <div className="font-bold">{el.user.username}</div>
              <div>{el.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
