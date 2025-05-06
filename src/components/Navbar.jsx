import React from 'react'

function Navbar() {
  return (
    <div className='navbar flex justify-between items-center bg-black text-white p-4'>
        <h1 className='text-3xl font-bold'>Binrary To Text</h1>
        <ul className='flex px-2 gap-4 font-semibold'>
            <li className='px-5 py-2 font-semibold hover:text-gray-200 cursor-pointer'>Home</li>
            <li className='px-5 py-2 font-semibold hover:text-gray-200 cursor-pointer'>About</li>
            <li className='px-5 py-2 font-semibold hover:text-gray-200 cursor-pointer'>content</li>
        </ul>
    </div>
  )
}

export default Navbar