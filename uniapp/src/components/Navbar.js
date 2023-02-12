import React from "react";
import uni from "../images/uni.png";
import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="flex items-center justify-between bg-[#90B319] rounded-sm fixed w-full z-[2]  ">
      {/* Left Side */}
      <div className="flex items-center xl:justify-start gap-2.5 xl:ml-5 xl:w-[60rem] sm:w-full sm:justify-center">
        <img src={uni} className=" my-3 h-10 w-12" />
        <p className="font-serif font-semibold sm:text-[1.3rem] md:text-[1.5rem]">
          University Research Monitoring System
        </p>
      </div>
      {/* Right Side */}
      <div class="xl:hidden mr-4 relative">
        <button
          class="block h-9 w-9 rounded-full "
          onClick={() => {setDropdown(!dropdown)}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-[0.4rem]"
            
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              
            />
          </svg>
        </button>
        <div
          id="menu"
          className={`bg-white mt-2 rounded-lg absolute w-[9rem] right-0 ${dropdown ? 'block' : 'hidden'}`}
        >
          <Link to="/" className="block py-2 hover:bg-slate-400/30 pl-12">
            HOME
          </Link>
          <Link to="/login" className="block py-2 hover:bg-slate-400/30 pl-12">
            LOGIN
          </Link>
          <Link to="/signup" className="block py-2 hover:bg-slate-400/30 pl-10">
            SIGN UP
          </Link>
        </div>
      </div>

      <div className="xl:flex hidden items-center gap-7  mr-10">
        <div className="px-[0.8rem] py-2.5 relative rounded group overflow-hidden font-medium bg-[#90B319] text-black">
          <button>
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-orange-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white font-semibold font-mono sm:font-extrabold sm:text-[0.9rem] ">
              <Link to="/">HOME</Link>
            </span>
          </button>
        </div>

        <div className="px-[0.8rem] py-2.5 relative rounded group overflow-hidden font-medium bg-[#90B319] text-black">
          <button>
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-orange-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white font-semibold font-mono sm:font-extrabold sm:text-[0.9rem]">
              <Link to="/login">LOGIN</Link>
            </span>
          </button>
        </div>
        <div className="px-[0.8rem] py-2.5 relative rounded group overflow-hidden font-medium bg-[#90B319] text-black">
          <button>
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-orange-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white font-semibold font-mono sm:font-extrabold sm:text-[0.9rem]">
              <Link to="/signup ">SIGN UP</Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
