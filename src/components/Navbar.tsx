import React from 'react'

 const Navbar: React.FC = () => {
  return (
	  <>
	   <div className="w-full items-center flex justify-between px-10 bg-[#0A0A0A] h-20 fixed top-0 bg-opacity-20  backdrop-blur-md">
      <div>
      <a href="">
        <img
          className="
           w-20"
          src="https://ctftime.org/media/cache/8d/37/8d3746b689ba3c133cd3599d898b6a4b.png"
          alt="H4B"
        />  </a> 
      </div>

      <div className="w-1/3">
        <ul className="flex justify-evenly font-mono font-extrabold ">
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
      </div>
    </div>
	  </>
  );
};

export default Navbar;