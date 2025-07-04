import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum in
            laborum repellat quos obcaecati consequatur soluta magni
            consequuntur quisquam voluptas.
          </h1>

          <div className="flex justify-start items-center gap-4 text-gray-400 text-sm">
            <span>written by</span>
            <Link>John Doe</Link>
            <span>on</span>
            <Link>web design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            voluptatibus incidunt molestias libero? Laudantium natus dicta
            assumenda vero, dolorem ullam et rem nesciunt sed id fuga doloribus
            enim reprehenderit exercitationem similique veniam maiores quam
            culpa, saepe error commodi. Odit, quas corporis! Laborum a, minus
            voluptatibus quos reiciendis quidem perspiciatis at?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p className="m-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            molestiae aliquid blanditiis magnam atque corrupti vel delectus
            dolore tempore culpa, eveniet recusandae harum excepturi placeat
            nesciunt beatae commodi expedita sapiente velit. Facere commodi
            cupiditate blanditiis officia alias beatae facilis quis ex quos.
            Eligendi unde et, sint vero dolorem officiis veniam!
          </p>

          <p className="m-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            molestiae aliquid blanditiis magnam atque corrupti vel delectus
            dolore tempore culpa, eveniet recusandae harum excepturi placeat
            nesciunt beatae commodi expedita sapiente velit. Facere commodi
            cupiditate blanditiis officia alias beatae facilis quis ex quos.
            Eligendi unde et, sint vero dolorem officiis veniam!
          </p>

          <p className="m-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            molestiae aliquid blanditiis magnam atque corrupti vel delectus
            dolore tempore culpa, eveniet recusandae harum excepturi placeat
            nesciunt beatae commodi expedita sapiente velit. Facere commodi
            cupiditate blanditiis officia alias beatae facilis quis ex quos.
            Eligendi unde et, sint vero dolorem officiis veniam!
          </p>

          <p className="m-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            molestiae aliquid blanditiis magnam atque corrupti vel delectus
            dolore tempore culpa, eveniet recusandae harum excepturi placeat
            nesciunt beatae commodi expedita sapiente velit. Facere commodi
            cupiditate blanditiis officia alias beatae facilis quis ex quos.
            Eligendi unde et, sint vero dolorem officiis veniam!
          </p>

          <p className="m-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            molestiae aliquid blanditiis magnam atque corrupti vel delectus
            dolore tempore culpa, eveniet recusandae harum excepturi placeat
            nesciunt beatae commodi expedita sapiente velit. Facere commodi
            cupiditate blanditiis officia alias beatae facilis quis ex quos.
            Eligendi unde et, sint vero dolorem officiis veniam!
          </p>

          <p className="m-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            molestiae aliquid blanditiis magnam atque corrupti vel delectus
            dolore tempore culpa, eveniet recusandae harum excepturi placeat
            nesciunt beatae commodi expedita sapiente velit. Facere commodi
            cupiditate blanditiis officia alias beatae facilis quis ex quos.
            Eligendi unde et, sint vero dolorem officiis veniam!
          </p>
        </div>
        <div className="px-4 h-max sticky top-8 w-1/2">
          <h1 className="bg-green-100 w-min mb-4">Author</h1>
          <div className="flex gap-10 mb-4 items-center">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
            />

            <Link>John Doe</Link>
          </div>
          <div className="w-full">
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. non.
            </p>
            <div className="flex gap-2 mb-4">
              <Image src="facebook.svg" />
              <Image src="instagram.svg" />
            </div>
            <PostMenuAction/>
            <div className="flex flex-col gap-2 text-sm mb-6">
              <h1 className="font-bold">Categories</h1>

              <Link className="underline">All</Link>
              <Link className="underline" to="/">
                web design
              </Link>
              <Link className="underline" to="/">
                Database
              </Link>
              <Link className="underline" to="/">
                development
              </Link>
              <Link className="underline" to="/">
                search engines
              </Link>
              <Link className="underline" to="/">
                marketting
              </Link>
            </div>
            <div>
              <h1 className="mb-4">Search</h1>
              <Search/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
