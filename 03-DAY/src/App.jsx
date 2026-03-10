import React from 'react'
import Card from './components/card'

const App = () => {
  return (
   <div className='parent'>
    <Card user='AKHIL VERMA' age={18} img="https://images.unsplash.com/photo-1771226281089-771a31ff54d2?q=80&w=1114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user='Sarthak' age={19} img="https://plus.unsplash.com/premium_photo-1758671700626-d0f5950b887a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user='Priyanshu' age={20} img="https://plus.unsplash.com/premium_photo-1757674926227-4594a1c5dbd5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   {/* {Card()} */}

    
   </div>
  )
}

export default App