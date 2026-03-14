import React from 'react'
import Rightcard from './rightcardcontent'
const rightcontent = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap gap-8 overflow-x-auto w-2/3  p-6'>
      {props.users.map(function(elem,idx){
        return <Rightcard key={idx} img={elem.img} id={idx} tag={elem.Tag} color={elem.color}/>
      })}
    </div>
  )
}

export default rightcontent