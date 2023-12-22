import React from 'react'
import laptop from '../assets/img/laptop.jpg'
const Experts = () => {
  return (
    <div className="max-w-[1240px] bg-white mx-auto p-2 my-5 md:grid grid-cols-2">
      <div className="col-span-1 md:w-[80%]">
         <img src={laptop} alt="" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center">

         <h1 className='text-[#00df9a] font-bold my-2'>
            LEARN FROM EXPERTS
         </h1>
         <p className='my-2 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima porro, possimus cum eligendi, doloremque aliquid numquam vitae error asperiores cupiditate, voluptas optio quaerat quo fugiat et suscipit dicta modi iusto sed facilis officia pariatur magni? Cumque ipsum voluptatum cum,

         </p>
         <button className='w-[30%] bg-black text-white p-3 rounded'>Get started</button>
      </div>
    </div>
  )
}

export default Experts