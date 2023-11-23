import { useState } from "react";
import Loading from "../../components/Loading";

export default function CreateComment({ image }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loading />}
      <div className="flex justify-between h-80">
        <div className="flex flex-1 flex-col justify-center items-center border border-r cursor-pointer hover:bg-secondary overflow-hidden">
          <img src={image} alt="post-pic" />
        </div>

        <div className="flex-1">
          <textarea
            className="block w-full h-full resize-none bg-blue-950"
            placeholder="Write about your sky..."
            value={message}
            // onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div
        className="flex justify-center border-t text-base font-bold min-w-full text-blue-500 p-3 cursor-pointer hover:bg-secondary"
        // onClick={handleSubmitPost}
      >
        Comment
      </div>
    </div>
  );
}
