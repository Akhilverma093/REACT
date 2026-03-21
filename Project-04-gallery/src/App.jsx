
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'


const App = () => {
const [userdata, setUserdata] = useState([]);
const [index, setindex] = useState(1)

 const getData =async()=>{
 const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`) 
 setUserdata(response.data)
 }
  //this is used to print the information to UI without anywhere clicking
  useEffect(function(){
    getData()
  },[index])



 let printUserData= <h3 className='text-gray-400 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>;
 if(userdata.length>0)
 {
  printUserData=userdata.map(function(elem,idx){
    return <div key={idx}>
     <Card elem={elem}/>
    </div>
  })
 }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
     <div className='flex flex-wrap gap-10 p-4 px-16'>
      {printUserData}
     </div>
    <div className='flex justify-center gap-6 items-center p-4'>
<button 

style={{opacity:index==1?0.5:1}}

className='bg-amber-400 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold'
onClick={()=>{
  if(index>1){   
  setindex(index-1)
  setUserdata([])
  }
}}
>
Prev</button>
<h1>Page {index}</h1>
<button 
className='bg-amber-400 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold'
onClick={()=>{
  setUserdata([])
  setindex(index+1)

}}
>
Next</button>
</div>
    </div>

  )
}

export default App