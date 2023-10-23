import axios from "../../config/axios";
import { useParams } from "react-router-dom";

export default function UnknownAction({setStatusWithAuthUser}) {
  const {profileId} = useParams();

  const handleClickFollow = async () => {
    try {
      await axios.post(`/follow/${profileId}`);
      setStatusWithAuthUser('FOLLOWING')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <button 
      className="text-white font-semibold py-2 px-2 rounded-lg bg-blue-500 hover:bg-blue-400"
      onClick={handleClickFollow}
      >
      Follow
    </button>
  );
}
