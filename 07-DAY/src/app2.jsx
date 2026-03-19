import React, { useState } from 'react'

const app2 = () => {
  
  const [num, setnum] = useState(0)

function increasenum(){
  setnum(num+1);

}
function decreasenum(){
  setnum(num-1);

}
  return (
    <div className='App2'>
      <h1>{num}</h1>
      <button onClick={increasenum}>increase</button>
      <button onClick={decreasenum}>decrease</button>
    </div>
  )
}

export default app2