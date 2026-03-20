import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
//METHOD 1-it is using fetch... 
 //javascript work in synchronise way but during API calling it work like asynchronise 

 //so we use async means asynchronise
// async function getData(){
// const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')

// console.log(response)
// }

//in arrow function-

// const getData =async ()=>{
//   const response= await fetch('https://jsonplaceholder.typicode.com/todos')
//   console.log(response)
//   const data=await response.json()
//   console.log(data)

// }

//METHOD 2-axios for this we have to run a command in terminal- npm i axios
const [data,setData]=useState([])
const getData =async()=>{
//method 1-
  // const response=await axios.get('https://jsonplaceholder.typicode.com/users')
  // console.log(response.data)

  const {data} =await axios.get('https://picsum.photos/v2/list')
  

  setData(data)
  
}

  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function(elem,idx){

          return <h3>Hello, {elem.author}</h3>
        })}

      </div>
    </div>
  )
}

export default App