import React from 'react'
import {Link} from 'react-router-dom'
const navbar = () => {
  return (
    <div className='flex item-center justify-between py-6 px-8 bg-cyan-900'>
      <h2 className='text-2xl font-bold'>Sheryians</h2>
      <div className='flex gap-8'>
        <Link className='text-lg' to='/'>Home</Link>
        <Link className='text-lg' to='/about'>About</Link>
        <Link className='text-lg' to='/product'>Product</Link>
        <Link className='text-lg' to='/courses'>Courses</Link>
        
      </div>
    </div>
  )
}

export default navbar