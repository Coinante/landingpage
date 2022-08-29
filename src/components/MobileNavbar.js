import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const MobileNavbar = ({ toggle }) => {

   const [open, setOpen] = useState(false);
   const [close, setClose] = useState(false);
  const NavbarItems = [
     {
    title: "How to Play",
    link: "/howtoplay",
  },
    {
    title: "About Us",
    link: "/aboutus",
  },
  {
    title: "Contact",
    link: "/contact",
  },

];

 


  return (
    <div className="bg-white rounded">
    
       <nav id="mobile-navigation" className="bg-white drop-shadow-sm py-4 px-8 top-0 right-0 bottom-0 backdrop-blur-sm z-10">
          <ul className=" w-20 absolute top-0 right-0 bottom-0 w-10/12 py-4 bg-white drop-shadow-2xl z-10 transition-all">

      <li className=" rounded border-primary w-20 hover:bg-slate-100 ">
        <a href="/howtoplay" className=" bg-white block p-2 text-lg ">How to play</a>
      </li>
      <li className=" w-20 border-t bg-white border-primary border-inherit hover:bg-slate-100">
        <a href="/aboutus" className="block p-2 text-lg ">About</a>
      </li>
      <li className="w-20 border-t bg-white border-primary border-inherit  hover:bg-slate-100">
        <a href="/contact" className="block p-2 text-lg">Contact</a>
      </li>

    </ul>

  
    <button  onClick={() => setClose(!close)} class="absolute top-0 right-0 bottom-0 left-0"
     
      aria-controls="mobile-navigation" aria-label="Close Navigation Menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute top-2 left-2" fill="black" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>


  
    </nav>
    </div>
  );
};




export default MobileNavbar;