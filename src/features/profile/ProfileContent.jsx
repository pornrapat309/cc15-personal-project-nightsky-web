import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";

export default function ProfileContent({ postObj }) {
  // const { profileId } = useParams();

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
