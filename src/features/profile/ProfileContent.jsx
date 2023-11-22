export default function ProfileContent({ postObj }) {
  return (
    <>
      <div className="h-[300px] ">
        <img
          src={postObj.image}
          alt="post-pic"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
