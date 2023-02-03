import React from 'react';
import Image from 'next/image';
import Pic from '/pages/assets/unnamed.jpg';
import Sec from '/pages/assets/sec.jpg';
import  Third from '/pages/assets/third.jpg';
import  Five from '/pages/assets/five.jpg';
const iconspage = () => {
  return (
    <section className="pt-12 justify-center items-center  ">
      
  <h1 className="text-5xl font-bold text-center md:text-6xl">Get the Best Price for Your Home</h1>
  <p className="text-center text-black text-base md:text-lg mt-6 mb-6">Find the market value of your home. We’ll visit your property and craft a personalized estimate of your home’s value based on:</p>

 <div className="flex flex-wrap justify-center items-center">
  
 <div className="w-full md:w-1/4 p-4">
    <div className="bg-white rounded  flex flex-col items-center">
    <Image
      src={Pic}
      alt="Picture of the author"
      width={500}
      height={500}
       className="w-24 h-24 rounded-full"> 
       </Image>
      <h3 className="text-xl font-bold text-black pt-4">On-Site Evaluation</h3>
      </div>
  </div>
  <div className="w-full md:w-1/4 p-4">
    <div className="bg-white   p-6 flex flex-col items-center">
    <Image
      src={Sec}
      alt="Picture of the author"
      width={500}
      height={500}
       className="w-24 h-24 "> 
       </Image>
      <h3 className="text-xl font-bold text-black pt-4">Property Comps</h3>
     </div>
  </div>
  <div className="w-full md:w-1/4 p-4">
    <div className="bg-white rounded  p-6 flex flex-col items-center">
    <Image
      src={Third}
      alt="Picture of the author"
      width={500}
      height={500}
       className="w-24 h-24 "> 
       </Image>
    
      <h3 className="text-xl font-bold text-black pt-4">Housefax Report</h3>
      </div>
  </div>
  <div className="w-full md:w-1/4 p-4">
    <div className="bg-white rounded  p-6 flex flex-col items-center">
    <Image
      src={Five}
      alt="Picture of the author"
      width={500}
      height={500}
       className="w-24 h-24 rounded-full"> 
       </Image>
    
      <h3 className="text-xl font-bold text-black pt-4">No-Strings<br/> Attached</h3>
      </div>
  </div>
 
</div>


</section>
  )
}

export default iconspage