import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
const PostListItem = () => {
  return (
    <div className="flex flex-col gap-8 xl:flex-row">
      <div className="md:hidden xl:block">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" />
      </div>
      <div className="">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ea ex,
          tempore corrupti est possimus?
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by: </span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fuga
          praesentium expedita saepe harum consequatur ratione quis vero sed at
          iusto magni, assumenda rerum ut sapiente mollitia? Reiciendis,
          voluptates minima.
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
