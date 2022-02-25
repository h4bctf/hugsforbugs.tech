import React, { useState } from 'react'

 const Navbar: React.FC = () => {
   const [openDrop , setOpenDrop] = useState(false);
  return (
	  <>
	   <div className="w-full items-center flex justify-between px-10 bg-[#0A0A0A] h-20 fixed top-0 bg-opacity-20  backdrop-blur-md ">
      <div>
      <a href="">
        <img
          className="
           w-20"
          src="https://ctftime.org/media/cache/8d/37/8d3746b689ba3c133cd3599d898b6a4b.png"
          alt="H4B"
        />  </a> 
      </div>

      <div>
        <ul className="hidden justify-evenly font-mono font-extrabold sm:flex">
          <li className="px-3">
            <a href="#Home" className="cursor-pointer text-white opacity-70 hover:opacity-100">
              Home
            </a>
          </li>
          <li className="px-3">
            <a href="#About" className="cursor-pointer text-white opacity-70  hover:opacity-100">
              About
            </a>
          </li>
          <li className="px-3">
            <a href="#Team" className="cursor-pointer text-white opacity-70  hover:opacity-100">
              Team
            </a>
          </li>
          <li className="px-3">
            <a href="#Blogs" className="cursor-pointer text-white  opacity-70 hover:opacity-100">
              Blogs
            </a>
          </li>
          <li className="px-3">
            <a href="" className="cursor-pointer text-white  opacity-70  hover:opacity-100">
              Contact
            </a>
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
   <div className='absolute top-8 right-0 bg-[#337Bd4]'>
       <ul className="flex flex-col justify-evenly font-mono font-extrabold sm:hidden">
          <li className="px-3  py-1 hover:bg-[#22538f]">
            <a href="#About" className="cursor-pointer text-white text-lg opacity-70  hover:opacity-100">
              About
            </a>
          </li>
          <li className="px-3 py-1 hover:bg-[#22538f]">
            <a href="#Team" className="cursor-pointer text-white opacity-70 text-lg hover:opacity-100">
              Team
            </a>
          </li>
          <li className="px-3 py-1 hover:bg-[#22538f]">
            <a href="#Blogs" className="cursor-pointer text-white text-lg  opacity-70 hover:opacity-100">
              Blogs
            </a>
          </li>
          <li className="px-3 py-1 hover:bg-[#22538f]">
            <a href="" className="cursor-pointer text-white  opacity-70 text-lg hover:opacity-100">
              Contact
            </a>
          </li>
        </ul>
            </div>
         )} 
          </div> 
        </div>
      </div>
    </div>
	  </>
  );
};

export default Navbar;