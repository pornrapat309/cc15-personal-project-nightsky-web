import { useRef } from "react";

export default function EditAvatarForm({setFile, onClose}) {

  

    const inputEl = useRef(null);
  return (
    <div className="font-semibold cursor-pointer">
        <input 
            type="file" 
            className="hidden" 
            ref={inputEl}
            onChange={e => {
                if (e.target.files[0]) {
                    setFile(e.target.files[0])
                }
                onClose();
                
            }}
            
            />
      <div  className="flex justify-center border-b border-gray-400 min-w-full text-blue-500 p-3" 
            onClick={() => inputEl.current.click()}
            
            >
        Upload Photo
      </div>
      <div 
        className="flex justify-center border-b border-gray-400 min-w-full text-red-500 p-3"
        onClick={() => {
            inputEl.current.value = ''
            setFile(null)
            onClose()
        }}
        >
        Remove Current Photo
      </div>
    </div>
  );
}
