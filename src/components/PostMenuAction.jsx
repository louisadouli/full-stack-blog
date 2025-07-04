import React from "react";
import { CiBookmark } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const PostMenuAction = () => {
  return (
    <div className="mb-4">
      <h1 className="w-min bg-green-100">Actions</h1>
      <div className="flex items-center gap-2 py-1 text-sm cursor-pointer">
        <CiBookmark/>
        <span>Save this post</span>
      </div>
      <div className="text-red-600 flex items-center gap-2 py-1 text-sm cursor-pointer">
        <MdDelete />
        <span>Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuAction;
