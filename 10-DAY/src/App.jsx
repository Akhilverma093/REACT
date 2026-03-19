import React from 'react'
import { useState } from 'react';

const App = () => {
//in this we learn to handling the input of form by two way data binding

const [title, settitle] = useState('')

const submitHandler =(e)=>{
  e.preventDefault();
  console.log('form submitted by', title);

  settitle('');//isse submit hone pr form reset ho jayega

}


  return (
    <div>
       <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
      <input type="text" placeholder='Enter your name' value={title} onChange={(e)=>{
        settitle(e.target.value)
      }} />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App