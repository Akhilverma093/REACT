import React from 'react'
import { useState } from 'react'

const App = () => {
 
  // we use usestatesnippet to assign variable so that we can write and read both if we initiliaze with let,var so we can only read the value we can not change the value of it 
  // Num-read only setnum- write only
  
  const [Num, setNum] = useState('Akhil')
  const [age, setage] = useState(20)
  function changeNum(){
    setNum('sarthak')
    setage(60)
  }

  return (
    <div className='page'>
      <h1>My name is {Num} and age is {age} </h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App