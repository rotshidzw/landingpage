import React from 'react'
import Image from 'next/image';
import Card from '/pages/assets/card.jpg';
import { motion } from "framer-motion";
const cards = () => {
  return (<>
  
  <h2 className="text-center font-bold text-3xl mb-20 pt-8">Explore My Recently SOLD Listings</h2>
<div className="flex flex-wrap text-center justify-center">

    
    <div className="w-full lg:w-1/3 p-6">
    
      <motion.div className="bg-white  p-6"  
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
  style={{ x: 100 }}>
      <p className='flex items-center justify-center mb-8 pt-8'> <Image
      src={Card}
      alt="Picture of the author"
      width={600}
      height={600}
       className=" justify-center "> 
       </Image></p>
        <p className="text-gray-600 text-xl  pb-6   font-medium">Tons of natural light</p>
        <p className="text-lg font-medium  pb-6 text-gray-900">3 bed/ 2 bath - $425,000</p>
        <p className="text-gray-600 text-md font-medium  ">Elegant, modern home near Central Park! It's everything you’ve dreamed your new home could be.</p>
        <button className="mt-4 text-indigo-500 text-md font-medium bg-white py-2 px-4 rounded">Learn More</button>
      </motion.div>
    </div>
    <div className="w-full lg:w-1/3 p-6">
      <motion.div className="bg-white  p-6"
        whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
  style={{ x: 100 }}>
      <p className='flex items-center justify-center mb-8 pt-8'> <Image
      src={Card}
      alt="Picture of the author"
      width={600}
      height={600}
       className=" justify-center "> 
       </Image></p>
        <p className="text-gray-600 text-xl  pb-6   font-medium">Tons of natural light</p>
        <p className="text-lg font-medium  pb-6 text-gray-900">3 bed/ 2 bath - $425,000</p>
        <p className="text-gray-600 text-md font-medium">Elegant, modern home near Central Park! It's everything you’ve dreamed your new home could be.</p>
        <button className="mt-4 text-indigo-500 text-md font-medium bg-white py-2 px-4 rounded">Learn More</button>
      </motion.div>
    </div>
    <div className="w-full lg:w-1/3 p-6">
      <motion.div className="bg-white  p-6"
       whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
  style={{ x: 100 }} >
      <p className='flex items-center justify-center mb-8 pt-8'> <Image
      src={Card}
      alt="Picture of the author"
      width={600}
      height={600}
       className=" justify-center "> 
       </Image></p>
        <p className="text-gray-600 text-xl  pb-6   font-medium">Tons of natural light</p>
        <p className="text-lg font-medium  pb-6 text-gray-900">3 bed/ 2 bath - $425,000</p>
        <p className="text-gray-600 text-md font-medium">Elegant, modern home near Central Park! It's everything you’ve dreamed your new home could be.</p>
        <button className="mt-4 text-indigo-500 bg-white text-md font-medium py-2 px-4 rounded">Learn More</button>
      </motion.div>
    </div>
  </div>
  </>
  )
}

export default cards