import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'
const page1content = (props) => {
  return (
    <div className='pb-16 pt-6 flex items-center gap-10 h-[90vh] px-18'>
      <Leftcontent />
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default page1content