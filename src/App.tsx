import { useState } from "react";

function App() {
  return (
    <div class="items-center flex justify-between px-10 bg-[#0A0A0A] h-full sticky top-0 ">
      <div>
        <img
          class="
           w-20"
          src="https://ctftime.org/media/cache/8d/37/8d3746b689ba3c133cd3599d898b6a4b.png"
          alt="H4B"
        />
      </div>

      <div class="w-1/3">
        <ul class="flex justify-evenly font-mono font-extrabold ">
          <li class="px-3 hover:bg-black">
            <a href="#About" class="text-white">
              About
            </a>
          </li>
          <li class="px-3 hover:bg-black">
            <a href="#Team" class="text-white">
              Team
            </a>
          </li>
          <li class="px-3 hover:bg-black">
            <a href="" class="text-white">
              Blogs
            </a>
          </li>
          <li class="px-3 hover:bg-black">
            <a href="" class="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
