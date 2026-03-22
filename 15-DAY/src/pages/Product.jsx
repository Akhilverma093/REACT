import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <div className='flex justify-center items-center gap-6 py-4'>
        <Link className='bg-green-600 p-2 rounded text-black' to='/product/men'>Mens</Link>
        <Link className='bg-pink-500 p-2 rounded' to='/product/Women'>Womens</Link>
      </div>
      {/* <h1>Product Page</h1> */}
      {/* outlet for method2- */}
      <Outlet/>
    </div>
  )
}

export default Product