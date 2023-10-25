import { useState, useRef } from "react";
import { HiPhoto } from "react-icons/hi2";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const fileEl = useRef(null);
  return (
    <div>
      <div className="flex justify-between h-80">
        <div
          className="flex flex-1 flex-col justify-center items-center border border-r cursor-pointer overflow-hidden hover:bg-blue-900"
          onClick={() => fileEl.current.click()}
        >
          {file ? (
            <div onClick={fileEl.current.click()}>
              <img src={URL.createObjectURL(file)} alt="post" />
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
            className="w-full h-full resize-none bg-blue-950"
            placeholder="Write about your sky..."
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center border-t text-base font-bold min-w-full text-blue-500 p-3 cursor-pointer">
        Post
      </div>
    </div>
  );
}
