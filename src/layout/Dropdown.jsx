import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownEl = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropDownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={dropDownEl}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex px-2 py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-50 cursor-pointer ${
          isOpen ? "text-white font-extrabold" : "font-normal text-gray-200"
        }`}
      >
        <BiSearch className="w-7 h-7" />
        <span className="px-4">Search</span>
      </div>
      {isOpen && (
        <div className="absolute grid grid-2 w-[28rem] h-full text-gray-200 top-0 left-64 rounded-r-3xl bg-primary border-r-[0.05rem] border-r-gray-600">
          <div className="relative flex flex-col justify-evenly items-center border-b-[0.05rem] border-b-gray-600">
            <span className="flex self-start row-span-1 px-8 text-3xl font-semibold">
              Search
            </span>
            <CiCircleRemove className="absolute top-[9.4rem] right-10 w-6 h-6 cursor-pointer text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="w-96 h-10 p-2 rounded-lg bg-gray-300 text-black"
            />
          </div>
          <div className="row-span-3">Search content</div>
        </div>
      )}
    </div>
  );
}
