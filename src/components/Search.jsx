import React from 'react'
import { IoMdSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>
      <IoMdSearch />
      <input type='text' placeholder='search a post...' className='bg-transparent'/>
    </div>
  )
}

export default Search
