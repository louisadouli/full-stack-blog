import React, { useState } from 'react'
import {IKImage} from 'imagekitio-react'
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* logo */}
      <Link  to='/' className='flex items-center gap-4 text-2xl font-bold'>
            <Image src="logo.png" w={32} h={32}/>
        <span>Esm Nadareh</span>
      </Link>
      {/* mobile */}
      <div className='md:hidden'>
        {/* mobile button */}
        <div className='cursor-pointer text-4xl' onClick={()=>setOpen(prev=>!prev)}>
            {open?"X":'='}
        </div>
        {/* mobile links */}
        <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 gap-8 font-medium text-lg transition-all ease-in-out ${open ? "-right-0": "-right-[100%]"}`}>
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About Us</Link>
        <Link to="">
            <button className='py-2 px-4 bg-blue-700 text-white rounded-3xl'>Login</button>
        </Link>
        </div>
      </div>
      {/* desktop */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
      <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About Us</Link>

      <SignedOut>
        <Link to="/login">
            <button className='py-2 px-4 bg-blue-700 text-white rounded-3xl'>Login</button>
        </Link>
        {/* <SignInButton /> */}
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      </div>
    </div>
  )
}

export default Navbar
