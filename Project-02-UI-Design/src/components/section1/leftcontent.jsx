import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Herotext from './heroText'
import Heroarrow from './heroArrow'
const leftcontent = () => {
  return (
    <div className='h-full flex flex-col justify-between  w-1/3 font-["Helvetica"]' >
      <Herotext/>
      <Heroarrow/>
     
    </div>
  )
}

export default leftcontent