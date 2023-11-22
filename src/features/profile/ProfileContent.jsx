export default function ProfileContent({ postObj, profileUser }) {
  const isProfileUser = profileUser.id === postObj.userId;
  return (
    <>
      {isProfileUser && (
        <div className="grid grid-cols-3 gap-1 text-white w-full h-full mx-32">
          <div className="border border-red-500">
            <img src={postObj.image} alt="post-pic" />
          </div>
        </div>
      )}
    </>
  );
}
