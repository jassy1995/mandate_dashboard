import React from "react";
// import useGlobalStore from "store/global";
import { useScrollPosition } from "Hooks/useScrollPosition";
// import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";


const Header = () => {

  const scrollPosition = useScrollPosition();
  const location = useLocation();
  
 
  return (
    <header
      className={`py-6  mb-20   border-b  fixed top-0 right-0 left-0 bg-white z-0 shadow-md`}
    >
      <div className="container mx-auto flex justify-center  sm:justify-between md:justify-between lg:justify-between xl:justify-between items-center font-mono">
         <div className="hidden sm:block font-medium text-sm md:text-xl lg:text-xl xl:text-xl text-blue-900 bg-myColor-transparent rounded-full md:capitalize md:first-letter:font-medium first-letter:text-2xl  md:first-letter:text-4xl first-letter:font-black">
            Clanafrica
          </div>
        <div className="space-x-14 md:space-x-8">
          <Link
            to="/"
            className={`font-mono font-black text-sm md:text-xl lg:text-xl xl:text-xl  text-slate-500 ${location.pathname ==='/' ? 'border-b-[3px] border-blue-500 pb-1':''}`}
          >
            No mandate
          </Link>
           <Link
            to="/pending"
             className={`text-sm md:text-xl lg:text-xl xl:text-xl font-mono font-black   text-slate-500 ${location.pathname ==='/pending' ? 'border-b-[3px] border-blue-500 pb-1':''}`}
          >
            Pending
          </Link>
          <Link
            to="/active"
            className={`text-sm md:text-xl lg:text-xl xl:text-xl font-mono font-black   text-slate-500 ${location.pathname ==='/active' ? 'border-b-[3px] border-blue-500 pb-1':''}`}
          >
            Active
          </Link>
        </div>
        <div className="hidden sm:flex items-center gap-6">
           <div>
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png" alt="mot exist" className="rounded-full w-10 h-10 object-cover"></img>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
