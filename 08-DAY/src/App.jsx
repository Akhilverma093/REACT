import React from 'react'
import { useState } from 'react'

const App = () => {
 
  // const [num, setNum] = useState(10)   
  
  // function btnclicked(){
  //   setNum(30);
  //   console.log(num);

  // }
  // const [num, setNum] = useState({user:'Akhil',age:20}) 
  //  function btnclicked(){
    //agr hame array ya object change krna hai toh hum destructring ka use kr skte hai.
   //destructuring of object-make a copy of object
  //  const newNum={...num};
  //  newNum.user="verma Ji";
  //  newNum.age=50
  //  setNum(newNum);
     
  // const [num, setNum] = useState([10,20,30,40])
  
  // const btnclicked =()=>{
  //   const newNum=[...num];
  //   newNum.push(99);

  //  setNum(newNum);
  // }

  //METHOD-2
  //   const [num, setNum] = useState({user:'rishi',age:20});
  
  // const btnclicked =()=>{
  //  setNum(prev=>({...prev,age:50}));
  // }
    
//batch update-
const [num, setnum] = useState(10)

const btnclicked=()=>{
  setnum(prev=>(prev+1))
  setnum(prev =>(prev+1));
  setnum(prev=>(prev+1))

  //ab yaha pr click krne pr +3 value inc. hogi
  //agr hum direct 3 time setnum(num+1)krte toh 1 br hi inc hoti kyuki wo bhut fast hota hai toh detect nhi kr pata hai 
}

    

  
  return (
    <div>
      {/* <h1>{num.user},{num.age}</h1> */}
       {/* <h1>{num}</h1> */}
       {/* <h1>{num.user},{num.age}</h1> */}
       <h1>{num}</h1>
      <button onClick={btnclicked}>Click</button>
    </div>
  )
}

export default App