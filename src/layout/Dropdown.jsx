import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";
import SearchList from "../components/SearchList";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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
        <div className="absolute p-10 w-[28rem] h-full text-gray-200 top-0 left-64 rounded-r-3xl bg-primary border-r-[0.05rem] border-r-gray-600">
          <div className="relative flex flex-col items-center">
            <span className="flex self-start pb-6 px-8 text-3xl font-semibold">
              Search
            </span>
            <div className="relative">
              <CiCircleRemove
                className="absolute top-2 right-2 w-6 h-6 cursor-pointer text-gray-600"
                onClick={() => setSearchInput("")}
              />
              <input
                type="text"
                placeholder="Search"
                className="w-96 h-10 p-2 rounded-lg bg-gray-300 text-black"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-auto">
            <SearchList
              searchInput={searchInput}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      )}
    </div>
  );
}
