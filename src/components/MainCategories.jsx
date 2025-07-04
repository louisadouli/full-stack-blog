import React from "react";
import { Link } from "react-router-dom";
const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=dev"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=db"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Database
        </Link>
        <Link
          to="/posts?cat=se"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Search Engine
        </Link>
        <Link
          to="/posts?cat=marketting"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Marketting
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>

      <div className="bg-gray-100 p-8 rounded-full flex items-center gap-2">
        <input
          className="border-gray-400 border-2 p-2 rounded-full"
          placeholder="Search"
        />
        <button className="bg-blue-700 text-white rounded-full p-2">
          submit
        </button>
      </div>
    </div>
  );
};

export default MainCategories;
