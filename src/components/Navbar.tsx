import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (

<nav className="flex z-50 justify-between items-center p-4 md:px-10 lg:px-20  bg-primary-light text-white fixed h-[10vh] w-full max-w-[1400px]">
          <Link href='/'> PhotoFit</Link>
          <div className="flex gap-10 items-center">
         <Link href='/search?purpose=for-rent'>Rent</Link>
         <Link href='/search?purpose=for-sale'>Buy</Link>
          <Link href='/'><HomeIcon/></Link>
          </div>
        </nav>
  )
}

export default Navbar