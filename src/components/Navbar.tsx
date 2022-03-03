import React, { useEffect, useRef, useState } from 'react'
import {Link} from "react-router-dom";

 const Navbar: React.FC = () => {
   const [openDrop , setOpenDrop] = useState(false);

  const dropRef = useRef<HTMLDivElement>(null);
  // const inputField = React.useRef() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
  console.log(dropRef);
  const handleClickOutside = (event: any) =>{
    console.log(event);
    
    if(!dropRef.current?.contains(event.target)){
      setOpenDrop(false)
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown" , handleClickOutside)
    }
  }, [dropRef])
  
  return (
	  <>
	   <nav className="w-full  z-20 items-center flex justify-between px-10 bg-[#0A0A0A] h-20 fixed top-0 bg-opacity-20  backdrop-blur-md ">
      <div>
     <Link to="/"> 
        <img
          className="
           w-20"
          src="https://ctftime.org/media/cache/8d/37/8d3746b689ba3c133cd3599d898b6a4b.png"
          alt="H4B"
        />  
      </Link>
      </div>


      <div>
        <ul className="hidden justify-evenly font-mono font-extrabold sm:flex">
          <li className="px-3">
          <Link to="/" className='cursor-pointer text-white opacity-75 hover:opacity-100'>Home</Link> 
          </li>
          <li className="px-3">
            <a href="#About" className="cursor-pointer text-white opacity-70  hover:opacity-100">
           About 
            </a>
          </li>
          <li className="px-3">
              <Link to="/team" className='cursor-pointer text-white opacity-75 hover:opacity-100'>Team</Link>
          </li>
          <li className="px-3">
          <Link to="/blog" className='cursor-pointer text-white opacity-75 hover:opacity-100'>Blog</Link> 
          </li>
          <li className="px-3">
          <Link to="/contact" className="cursor-pointer text-white opacity-75 hover:opacity-100">Contact Us</Link>
          </li>
        </ul>
        <div className="flex sm:hidden">
        <div className='relative'>
        
          {/* {openDrop ? (
          <button onClick={()=>{setOpenDrop(!openDrop)}}  className='bg-transparent border-0'>
            <i className="fa-solid fa-lg fa-bars-sort text-[#337BD4]"></i>
          </button>
          ) : (
            
          )} */}
            <button onClick={()=>{setOpenDrop(!openDrop)}} className="bg-transparent border-0">
                 <i className="fa-solid fa-2x fa-bars text-[#337BD4]"></i>
          </button>
         {openDrop && (
   <div ref={dropRef} className='absolute z-30 top-9 right-0 bg-[#337Bd4]' >
       <ul className="flex flex-col justify-evenly font-mono font-extrabold sm:hidden">
          <li className="px-3  py-1 hover:bg-[#22538f]">
            <a href="#About" className="cursor-pointer text-white text-lg opacity-100  hover:opacity-80">
              About
            </a>
          </li>
          <li className="px-3 py-1 hover:bg-[#22538f]">
            <a href="#Team" className="cursor-pointer text-white opacity-100 text-lg hover:opacity-80">
              Team
            </a>
          </li>
          <li className="px-3 py-1 hover:bg-[#22538f]">
            <a href="#Blogs" className="cursor-pointer text-white text-lg  opacity-100 hover:opacity-80">
              Blogs
            </a>
          </li>
          <li className="px-3 py-1 hover:bg-[#22538f]">
            <a href="" className="cursor-pointer text-white  opacity-100 text-lg hover:opacity-80">
              Contact
            </a>
          </li>
        </ul>
            </div>
         )} 
          </div> 
        </div>
      </div>
    </nav>
	  </>
  );
};

export default Navbar;