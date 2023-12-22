import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import Experts from './Experts';
import NewsLetter from './NewsLetter';
import Plans from './Plans';

const Banner = () => {

   const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
      "Web Development",
      "Digital Maketing",
      "Software Development"], 
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
<>
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] mx-auto text-center font-bold my-[100px]">
         <div className='text-xl md:text-3xl md:p[24px]'>
            Learn with us
         </div>
         <h2 className='text-white text-3xl md:text-[60px] md:p-[24px]'>
            Grow with us
         </h2>
         <div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
            Learn
            <span ref={el}></span>

         </div>
         <button className='bg-black text-white p-3 rounded'>Get started</button>

      </div>
      
    </div>
    <Experts/>
    <NewsLetter/>
    <Plans/>
    </>
  )
}

export default Banner