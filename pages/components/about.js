import React from 'react'
import Image from 'next/image';
import Me from '/pages/assets/me.jpg';
const about = () => {
  return (
   <>  
       <div className="bg-white border border-gray-400 p-6 text-center">
       <div className="px-8 py-5 lg:px-[250px]">
      <p className='flex items-center justify-center mb-8 pt-8 md:px-16'> <Image
      src={Me}
      alt="Picture of the author"
      width={400}
      height={400}
       className=" justify-center rounded-full mb-6 md:mb-0 md:mr-6"> 
       </Image></p>
        <div className="md:flex bg-white p-8 text-center   border-gray-300 mb-8">
    <div className="flex flex-col items-center md:flex-row">
      
        <div className="text-left md:text-center">
          <p className="text-black font-medium text-lg mb-6 leading-tight md:w-full md:px-12">
            Over the past 15 years, I’ve helped more than 2,000 families determine their home’s worth, set the right price, and negotiate a winning deal. As a veteran agent in the Dreamland area, I bring unique expertise to each sale.
          </p>
          <p className="text-black font-medium text-lg mb-6 leading-tight md:w-full md:px-12">
            My goal is to make the sales process as smooth and successful as possible. I hope we can work together!
          </p>
        </div>
        </div>
        </div>
      </div>
      <p className="text-black text-xs mt-6">rotshidzwa - Real Estate Agent</p>
      <p className="text-black text-xs">©2023 rotshidzwa. All rights reserved. Privacy Policy</p>
    </div>
  </>
)}

export default about