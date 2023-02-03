import React from 'react'

const form = () => {
  return (
    <div className="border border-gray-400 bg-gray-700 rounded p-6">
    <form className="w-full max-w-sm   mx-auto mt-16">
      <h2 className="text-2xl font-bold underline mb-4">Looking to sell? Get the Best Price for Your Home</h2>
      <div className="flex flex-wrap -mx-3  mb-6">
        <div className="w-full md:w-1/2 px-3  mb-12 md:mb-0">
          <input className="appearance-none block w-full mt-10 bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-indigo-500" id="first-name" type="text" placeholder="First Name"/>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <input className="appearance-none block mt-10 w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-indigo-500" id="last-name" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <input className="appearance-none block w-full mt-10 bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-indigo-500" id="email" type="email" placeholder="Email address"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <button className="bg-indigo-500 text-white mt-10 py-2 px-4 rounded hover:bg-indigo-600">Get a Free Home Valuation</button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default form