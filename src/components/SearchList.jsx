import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import axios from "../config/axios";

export default function SearchList({ searchInput, setIsOpen }) {
  const navigate = useNavigate();
  const [getAllUser, setGetAllUser] = useState([]);
  const handleClick = (id) => navigate(`/profile/${id}`);

  let serachUser = getAllUser.filter((item) =>
    item.username.toLowerCase().includes(searchInput)
  );
  if (searchInput.length === 0) {
    serachUser = [];
  }

  useEffect(() => {
    axios
      .get("/user/all")
      .then((res) => {
        setGetAllUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul className="p-10 flex flex-col gap-6">
      {serachUser.map((el) => (
        <li
          className="flex justify-between py-2 px-12 rounded-lg cursor-pointer hover:bg-secondary"
          key={el.id}
          onClick={() => {
            handleClick(el.id);
            setIsOpen(false);
          }}
        >
          <Avatar className="h-14" src={el.profileImage} />
          <div className="self-center text-xl">{el.username}</div>
        </li>
      ))}
    </ul>
  );
}
