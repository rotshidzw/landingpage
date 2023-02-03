import React from 'react';
import Image from 'next/image';
import Pic from '/pages/assets/support.jpg';

const landingpage = () => {
  return (
    <section className="bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/j4PVd46XhnwRKfCj5aH2L7PhAKUsI7-Q7Y7FE0Wl41fSie8QSOlc4jzl4DsCwy0_fQHN6623WU4C3YlWy2Iyyxo=w1349')]">
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <div className="md:flex md:flex-row flex-col w-full mx-auto text-left">
        <div className="relative inline-flex items-center mx-auto align-middle">
          <div className="text-center">
          <p className="max-w-xl mx-auto mt-8 font-normal text-xl leading-relaxed text-gray-200">mavhungu rotshidzwa • Real Estate Agent</p>
           
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-200 md:text-5xl  lg:text-6xl lg:max-w-4xl">
              Long headline to turn <div className="hidden lg:block">
              your visitors into users</div>
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-2xl leading-relaxed text-gray-200">Wondering what your Dreamland home is worth? </p>
           
          </div>
        </div> <div className="flex justify-center md:justify-end w-full max-w-2xl gap-2 mx-auto mt-6">
          <div className="w-full max-w-xs">
            
    <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
              <label className="block text-start text-gray-700 text-sm font-bold mb-8" for="email">
                Let me craft a personalized estimate of your home’s value
              </label>
    <div className="mb-4">
      <label className="block text-start text-gray-700 text-sm font-bold mb-2" for="email">
            Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gmail" type="text" placeholder="Email" />
    </div>
    <div className="mb-6">
      <label className="block text-start text-gray-700 text-sm font-bold mb-2" for="username">
    FirstName
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="name" placeholder="FIRST NAME"/>
     
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline" type="button">
   Free Offers
      </button>
   
    </div>
  </form>
            </div>
      </div>
    
    </div>
  
</div>
  </section>
  )
}

export default landingpage