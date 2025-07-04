import React from "react";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* breadcrumb */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and activities</span>
      </div>
      {/* intro */}
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rem.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            labore debitis dolore veniam totam culpa aliquid itaque atque
            pariatur, fugit ab tenetur omnis iste. Iure ab culpa dolorem sit,
            labore at error quis reprehenderit reiciendis !
          </p>
        </div>
        <div className="">
          <Link to="/write">
            <button className="w-64 h-64 flex justify-center items-center text-3xl rounded-full text-white bg-blue-800">
              Start <br />
              Writing
            </button>
          </Link>
        </div>
      </div>
      <MainCategories />
      <FeaturedPosts />
      <div className="">
        <div className="my-8 text-2xl text-gray-600">Recent Posts</div>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
