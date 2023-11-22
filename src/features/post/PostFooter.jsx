export default function PostFooter({ username, message, totalComment }) {
  return (
    <div className="flex flex-col gap-2 text-white">
      <div className="flex gap-3">
        <div>{username}</div>
        {message && <div>{message}</div>}
      </div>
      <div className="cursor-pointer">View all {totalComment} comments</div>
    </div>
  );
}
