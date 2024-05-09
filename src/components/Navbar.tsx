import React from 'react'
import Image from "next/image";
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="h-24 bg-white text-black flex items-center justify-between p-4 w-full">
        <div className="flex flex-start ">
        <Image src="/logo.png" alt="logo" width={385} height={71} />
        </div>
        <div className="flex justify-end ml-6 md:px-10">
        <Menu size={32} className='cursor-pointer'/>
        </div>
      </div>
  )
}

export default Navbar