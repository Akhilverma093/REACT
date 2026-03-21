import React from 'react'
import {Link} from 'react-router-dom'

const nav = () => {
  return (
    <div className='nav'>
      <h3>Sheryians</h3>
      <div>
      {/* to protect page from reloading we use link react tag */}
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/purchase'>Purchase</Link>
      </div>
     </div>
  )
}

export default nav