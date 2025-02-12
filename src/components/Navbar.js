import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import styled from "styled-components";



const Navbar = ({ toggle }) => {
   const [open, setOpen] = useState(false);
   const [close, setClose] = useState(false);
  const NavbarItems = [
     {
    title: "How to Play  ",
    link: "/howtoplay",
  },
  {
    title: "|",
    link: "",
  },
    {
    title: "About Us  ",
    link: "/aboutus",
  },
  {
    title: "|",
    link: "",
  },
  {
    title: "Contact",
    link: "/contact",
  },

];




  return (<>
    <nav className="navo" >
      <Link to="/" className="link ">
        <div >
       <svg className="logo" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="150" height="150" viewBox="0 0 482.000000 139.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(-17.000000,140.000000) scale(0.100000,-0.100000)"
fill="#0b65c6" stroke="none">
<path d="M571 1149 c-199 -33 -371 -211 -402 -416 -40 -267 150 -523 419 -564
267 -40 522 150 563 418 39 264 -149 522 -411 563 -74 11 -94 11 -169 -1z
m196 -144 c98 -29 180 -119 198 -217 l7 -38 -91 0 c-83 0 -91 2 -91 19 0 53
-94 110 -157 95 -93 -22 -127 -77 -128 -204 0 -131 41 -193 136 -206 64 -9
117 17 138 68 l16 38 88 0 c101 0 102 -2 63 -87 -33 -69 -95 -127 -164 -154
-76 -28 -204 -23 -274 10 -138 66 -210 228 -180 402 31 181 151 286 328 288
33 1 83 -6 111 -14z"/>
<path d="M1846 1109 c-55 -44 -19 -129 55 -129 72 0 107 86 53 129 -15 12 -39
21 -54 21 -15 0 -39 -9 -54 -21z"/>
<path d="M3910 975 l0 -65 -35 0 -35 0 0 -60 0 -60 35 0 35 0 0 -152 c0 -169
5 -189 59 -225 28 -19 47 -23 105 -23 95 0 99 4 85 68 -9 45 -14 52 -34 52
-54 0 -55 2 -55 146 l0 134 45 0 45 0 0 60 0 60 -45 0 -45 0 0 65 0 65 -80 0
-80 0 0 -65z"/>
<path d="M1397 910 c-122 -31 -187 -121 -187 -258 0 -87 16 -134 62 -187 50
-56 110 -80 203 -79 55 1 81 7 122 27 90 46 128 119 127 242 0 67 -5 89 -27
132 -27 53 -71 93 -119 112 -40 15 -139 21 -181 11z m118 -126 c30 -20 48 -72
47 -140 0 -62 -16 -99 -54 -127 -34 -25 -81 -15 -111 25 -25 34 -34 130 -17
182 22 66 83 94 135 60z"/>
<path d="M2354 909 c-18 -5 -48 -27 -68 -49 l-36 -40 0 45 0 45 -80 0 -80 0 0
-260 0 -260 80 0 80 0 0 154 c0 170 9 210 51 231 42 22 67 18 100 -14 l29 -29
0 -171 0 -171 80 0 80 0 0 195 c0 173 -2 200 -19 233 -26 50 -58 78 -106 91
-46 13 -68 13 -111 0z"/>
<path d="M2855 911 c-48 -12 -91 -38 -118 -71 -25 -29 -43 -68 -35 -76 2 -2
37 -7 76 -10 64 -6 72 -5 72 10 0 22 62 48 96 40 14 -4 32 -17 40 -30 24 -36
4 -61 -54 -69 -102 -14 -153 -25 -182 -40 -95 -49 -94 -211 2 -261 49 -25 146
-23 190 4 20 12 39 29 42 37 10 28 26 15 26 -20 l0 -35 75 0 75 0 0 178 c0
241 -14 282 -107 324 -48 21 -152 31 -198 19z m142 -328 c-6 -60 -41 -93 -97
-93 -44 0 -70 20 -70 54 0 33 29 54 90 66 29 6 56 12 58 15 17 16 24 0 19 -42z"/>
<path d="M3521 906 c-19 -7 -49 -30 -68 -51 l-33 -38 0 46 0 47 -80 0 -80 0 0
-260 0 -260 79 0 79 0 4 168 c3 181 9 202 60 223 34 14 71 5 98 -23 18 -20 20
-35 20 -195 l0 -173 80 0 80 0 0 195 c0 213 -5 239 -56 287 -29 26 -90 49
-129 47 -11 0 -35 -6 -54 -13z"/>
<path d="M4392 902 c-100 -36 -152 -110 -160 -229 -6 -94 11 -152 60 -207 49
-57 109 -80 204 -80 94 0 177 39 211 99 35 61 32 65 -47 65 -60 0 -72 -3 -94
-25 -38 -37 -107 -35 -147 4 -17 17 -29 40 -29 55 l0 26 170 0 170 0 0 63 c0
69 -30 146 -71 184 -61 56 -180 76 -267 45z m155 -117 c11 -8 26 -28 31 -45
l11 -30 -100 0 c-91 0 -99 2 -99 19 0 11 14 31 31 45 35 30 92 35 126 11z"/>
<path d="M1820 650 l0 -260 80 0 80 0 0 260 0 260 -80 0 -80 0 0 -260z"/>
</g>
</svg>
      </div>
      </Link>
      <div className="menu-items " >
        {NavbarItems.map((item, index) => (
          <Link className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" to={item.link} key={index}>
            {item.title}
          </Link>
        ))}
      </div>
      
       <div className="icons ">
       
        <div className="mobile-menu-icon ">
          <FaBars onClick={() => setOpen(!open)} className="bg-white" />
          {open &&  
       
        <MobileNavbar/>

         
          }
        </div>
      </div>
     
    </nav>

    
    </>
  );
};




export default Navbar;