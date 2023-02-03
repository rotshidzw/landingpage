import React from 'react'
import Image from 'next/image';
import un from '/pages/assets/un.png';
import { motion } from "framer-motion";
const testimonial = () => {
  return (
    <div className="overflow-hidden py-5 bg-gray-200  shadow sm:rounded-lg">
        <div className="px-4 py-5 lg:px-[290px]">
        <div className="md:flex bg-white p-8 text-center   border-gray-300 mb-8">
  <div className="md:w-fill md:px-12">


    <h2 className="text-center font-bold text-3xl mb-20 pt-8">The Highest Price & All The Help You Need</h2>
      <p className='flex items-center justify-center mb-20 pt-8'> <Image
      src={un}
      alt="Picture of the author"
      width={50}
      height={50}
       className="w-16 h-16 justify-center "> 
       </Image></p>
      <p className="text-center text-lg md:text-2xl mb-20">Jane helped me sell my home for top dollar and provided me with helpful insights throughout the entire process. I truly could not have done it without her!</p>
    <p className="text-center text-gray-700  text-lg md:text-2xl ">- Amy Landers<br />Home Seller, 2020</p>
  </div>
 
</div>

      
 

</div>
</div>

  
  )
}

export default testimonial