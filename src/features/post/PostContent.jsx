import { CiStar } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function PostContent({ image, totalLike }) {
  return (
    <div className="py-3 flex flex-col gap-2 text-white">
      {image && (
        <div className="-mx-4 h-[22rem]">
          <img src={image} alt="post" className="w-full h-full" />
        </div>
      )}
      <div className="flex gap-3">
        <CiStar className="w-7 h-7 cursor-pointer self-center" />
        <IoChatbubbleOutline className="w-[1.35rem] h-[1.35rem] cursor-pointer self-center" />
      </div>
      <div>{totalLike} likes</div>
    </div>
  );
}
