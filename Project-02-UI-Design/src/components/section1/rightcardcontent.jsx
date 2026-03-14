import React from 'react'
import Rightcardtext from './rightcardtext'
const rightcardcontent = (props) => {
  return (
  <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
  <img className='h-full w-full object-cover' src={props.img} alt="" />
  
 <Rightcardtext id={props.id} color= {props.color}tag={props.tag}/>

    </div>
  )
}

export default rightcardcontent