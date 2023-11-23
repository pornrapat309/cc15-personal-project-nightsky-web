import axios from "../../config/axios";
import { useState, useRef } from "react";
import { HiPhoto } from "react-icons/hi2";
import Loading from "../../components/Loading";

export default function CreatePost({ onClose }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fileEl = useRef(null);

  const handleSubmitPost = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (file) {
        formData.append("image", file);
      }
      if (message) {
        formData.append("message", message);
      }
      setLoading(true);
      await axios.post("/post", formData);
      onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <div className="flex justify-between h-80">
        <div
          className="flex flex-1 flex-col justify-center items-center border border-r cursor-pointer hover:bg-secondary overflow-hidden"
          onClick={() => fileEl.current.click()}
        >
          {file ? (
            <div onClick={() => fileEl.current.click()}>
              <img
                src={URL.createObjectURL(file)}
                alt="post"
                className="w-full h-full"
              />
            </div>
          ) : (
            <HiPhoto className="h-10 w-10" />
          )}
          <input
            type="file"
            className="hidden"
            ref={fileEl}
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>

        <div className="flex-1">
          <textarea
            className="block w-full h-full resize-none bg-blue-950"
            placeholder="Write about your sky..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div
        className="flex justify-center border-t text-base font-bold min-w-full text-blue-500 p-3 cursor-pointer hover:bg-secondary"
        onClick={handleSubmitPost}
      >
        Post
      </div>
    </div>
  );
}
