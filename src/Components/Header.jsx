import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from "react-router-dom";

const Header = () => {
   
   const [toggle, settoggle] = useState(false);
   
   const clickHandler =() =>{
      settoggle(!toggle)
   }
  return (
    <div className='bg-[#2699fb] w-full p-4'>
      <div className="max-w-[1240px] mx-auto py-[12px] flex justify-between items-center">
         <div className="text-3xl font-bold">WsCube Tech</div>
         
         {
            toggle?
            <AiOutlineClose onClick={() => settoggle(!toggle)} className='text-white text-2xl md:hidden block' />
            :
            <AiOutlineMenu onClick={() =>settoggle(!toggle)} className='text-white text-2xl md:hidden block' />
         }

         <ul className='hidden md:flex gap-10 text-white '>
            <li><Link to="/">Company</Link> </li>
            <li><Link to="/Resources">Resources</Link> </li>
            <li><Link to="/About">About</Link> </li>
            <li><Link to="/Contact">Contact</Link></li>
         </ul>
         {/* {Responsive Menu} */}
         <ul className={`duration-300 md:hidden text-white fixed text-center pt-[100px] flex flex-col gap-5 bg-black top-[80px] w-full h-screen
         ${toggle ? 'left-[0]':'left-[-100%]'}`}>
            <li><Link to="/" onClick={clickHandler}>Company</Link> </li>
            <li><Link to="/Resources" onClick={clickHandler}>Resources</Link> </li>
            <li><Link to="/About" onClick={clickHandler}>About</Link> </li>
            <li><Link to="/Contact" onClick={clickHandler}>Contact</Link></li>
         </ul>
      </div>
    </div>
  )
}

export default Header