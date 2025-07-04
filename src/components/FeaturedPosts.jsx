import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* first */}
      <div className="w-full flex flex-col gap-4 lg:w-1/2">
        {/* image */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover " />
        {/* details */}
        <div className="">
          <h1>01.</h1>
          <Link className="text-blue-800 lg:text-lg"> Web Design</Link>
          <span className="text-gray-500"> 2 days ago</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolore.
          Asperiores ratione neque expedita.
        </Link>
      </div>
      {/* others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <h1 className="font-semibold">02.</h1>
            <Link
              to="test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas magni cum odio rerum.</Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <h1 className="font-semibold">02.</h1>
            <Link
              to="test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas magni cum odio rerum.</Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <h1 className="font-semibold">02.</h1>
            <Link
              to="test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas magni cum odio rerum.</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedPosts;
