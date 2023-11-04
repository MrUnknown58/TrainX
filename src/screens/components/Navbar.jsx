import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-white flex justify-between items-center'>
        <div className='text-2xl text-sky-500'>TrainX</div>
        <div className='flex justify-end items-center'>
        <a href="#" className='list-none text-gray-600'>My bookings</a>
        <a href="#" className='list-none text-blue-500'>SignUp / Login</a>
        </div>
    
    </nav>
  )
}

export default Navbar