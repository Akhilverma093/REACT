import React from 'react'

const rightcardtext = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
    <h2 className='bg-white text-xl rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
    <div>
      <p className='text-lg text-shadow-2xs leading-normal text-white mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quo necessitatibus veritatis, neque qui tempore.

      </p>
     <div className='flex justify-between'>
      <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-7 py-2 rounded-full text-lg'>{props.tag}</button>
      <button style={{backgroundColor:props.color}} className='text-white font-semibold px-3  rounded-full text-lg'><i class="ri-arrow-right-line"></i></button>
     </div>

    </div>
  </div>
  )
}

export default rightcardtext