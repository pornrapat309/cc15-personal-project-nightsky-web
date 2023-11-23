import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../config/axios";

export default function PostFooter({ postObj }) {
  return (
    <div className="flex flex-col gap-2 text-white">
      <div className="flex gap-3">
        <div>{postObj.user.username}</div>
        {postObj.message && <div>{postObj.message}</div>}
      </div>
      <div className="cursor-pointer">
        View all {postObj.totalComment} comments
      </div>
    </div>
  );
}
