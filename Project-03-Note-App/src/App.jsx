import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault();
    const copyTask=[...task]
    copyTask.push({title,details}) 
    settask(copyTask)
    settitle('')
    setdetails(' ')
  }
 const deleteNote=(idx)=>{
  const copyTask=[...task];
  copyTask.splice(idx,1)
  settask(copyTask)

 }
 

  return (
    <div className='min-h-screen lg:flex bg-zinc-900 text-white '>
   
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex lg:w-1/2 items-start flex-col gap-4 p-10'>
         <h1 className='text-4xl font-bold'>Add Notes</h1>
      
         <input 
        type="text" 
        placeholder='Enter Note Heading ' 
        className='px-5 py-2 w-full border-2 border-white rounded outline-none font-medium'
        value={title}
        required
        onChange={(e)=>{
          settitle(e.target.value)

        }}
        />
    
        <textarea
        type="text" 
        placeholder='Enter Details...'
        className='px-5 h-32 w-full py-2 border-2 border-white rounded outline-none font-medium' 
        value={details}
        onChange={(e)=>{
          setdetails(e.target.value);

        }}
        />

        <button 
        className='px-5 py-2 w-full rounded bg-white text-black outline-none font-medium active:scale-98 active:bg-gray-200'>
          Add Notes
        </button>
     
      </form>
    <div className='lg:w-1/2 lg:border-l p-10'>
    <h1 className='text-3xl font-bold'>Recent Notes</h1>
    <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>
     
     {task.map(function(elem,idx){

        return  <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 px-4 py-7.5 -ml-1.25  bg-cover bg-[url('https://imgs.search.brave.com/Sy8UrNAAls611Pvu8Qi3_FVBoZyXVIsAj5GPLUEsNik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3Ny9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')]">
          
          <div>
            <h3 className='leading-tight text-2xl font-bold text-black '>{elem.title}</h3>
            <p className='mt-1 leading-tight text-s font-semibold text-gray-500'>{elem.details}</p>
          </div>
         <button onClick={()=>{
          deleteNote(idx)
         }} className='w-full py-1 text-xs bg-red-500 text-white rounded font-medium cursor-pointer active:scale-95'>Delete</button>
        </div>
      })}
    </div>
    </div>

    </div>
  )
}

export default App